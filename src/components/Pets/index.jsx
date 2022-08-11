import React from "react";
import { database } from "../../Firebase";
import { ref, query, equalTo, orderByChild } from "firebase/database";
import { useList } from "react-firebase-hooks/database";
import { Card, Spin, Image, Row, Col } from "antd";
import { NavLink } from "react-router-dom";
import { LoadingOutlined, MoreOutlined } from "@ant-design/icons";
import Meta from "antd/lib/card/Meta";
import style from "./styles.less"

const gridStyle = {
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "left",
};

const Pet = ({ pet, uid } /*:Pet*/) => {
    return (
      <Row>
        <Col span={6}>
          <Card
            hoverable
            style={{
              width: "300px",
              margin: "2%",
              textAlign: "center",
              justifyContent: "center",
            }}
            cover={
              <Image
                src={pet.upload}
                width={200}
                placeholder={
                  <LoadingOutlined style={{ fontSize: "25px", padding:"10px", margin: "auto 50%", color: "rebeccapurple" }} />
                }
              />
            }
            actions={[
              <NavLink to={"/pet/" + uid}>
                <MoreOutlined key="more" />
                Подробнее
              </NavLink>,
            ]}
          >
            <Meta
              title={`Возраст: ${pet.age}`}
              description={`Пол: ${pet.gender == "female" ? "женский" : "мужской"} `}
            />
          </Card>
        </Col>
      </Row>
    );
};

const Pets = (props) => {
  const petRef = query(ref(database, "/pet"), orderByChild("type"), equalTo(props.kind));
  // console.log(petRef);
  const [snapshots, loading, error] = useList(petRef);
  //   console.log(snapshots);

  return (
    <>
      {error && <strong>Ошибка: {error}</strong>}
      {loading && <Spin className="spin" size="large" />}
      {!loading && snapshots && (
        <div>
          {snapshots.map((snapshot) => (
            <Pet uid={snapshot.key} key={snapshot.key} pet={snapshot.val()} />
          ))}
        </div>
      )}
    </>
  );
};

export default Pets;
