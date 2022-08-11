import React from "react";
import { database } from "../../Firebase";
import { ref, query, equalTo, orderByChild } from "firebase/database";
import { useList } from "react-firebase-hooks/database";
import { Card, Spin, Image, Row, Col } from "antd";
import { NavLink } from "react-router-dom";
import { LoadingOutlined, MoreOutlined } from "@ant-design/icons";
import Meta from "antd/lib/card/Meta";
import "./styles.less";
const colStyle = {
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  alignItems: "center",
  padding: "1%",
  margin: "1% auto",
};

const Pet = ({ pet, uid } /*:Pet*/) => {
  return (
    <Card
      style={{
        width: "300px",
        
        margin: "2%",
        padding: "3%",
        textAlign: "center",
      }}
      cover={
        <Image
          preview={false}
          src={pet.upload}
       
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
            <Col span={24} style={colStyle}>
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
