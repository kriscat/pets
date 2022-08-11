import React from "react";
import { database } from "../../Firebase";
import { ref, query, equalTo, orderByChild } from "firebase/database";
import { useList } from "react-firebase-hooks/database";
import { Card, Spin, Image, Row, Col } from "antd";
import { NavLink } from "react-router-dom";
import { LoadingOutlined, MoreOutlined } from "@ant-design/icons";
import Meta from "antd/lib/card/Meta";
import "./styles.less";

const Pet = ({ pet, uid } /*:Pet*/) => {
  return (
    <Card
           style={{
        margin: "2%",
        padding: "3%",
        textAlign: "center",
      }}
      cover={
        <Image
          preview={false}
          src={pet.upload}
          // width={200}
          placeholder={
            <LoadingOutlined
              style={{ fontSize: "25px", padding: "10px", margin: "auto 50%", color: "rebeccapurple" }}
            />
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
        description={`Пол: ${pet.gender === "female" ? "женский" : "мужской"} `}
      />
    </Card>
    
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
        <div className="site-card-wrapper">
          <Row gutter={16}>
            <Col span={8}>
              {snapshots.map((snapshot) => (
                <Pet uid={snapshot.key} key={snapshot.key} pet={snapshot.val()} />
              ))}
            </Col>
          </Row>
        </div>
      )}
    </>
  );
};

export default Pets;
