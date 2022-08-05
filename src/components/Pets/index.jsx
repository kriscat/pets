import React from "react";
import { database } from "../../Firebase";
import { ref, query, equalTo, orderByChild } from "firebase/database";
import { useList } from "react-firebase-hooks/database";
import { Card, Spin } from "antd";
import { NavLink } from "react-router-dom";
import { MoreOutlined } from "@ant-design/icons";
import Meta from "antd/lib/card/Meta";

const gridStyle = {
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
};

const Pet = ({ pet, uid } /*:Pet*/) => {
  return (
    <Card
      hoverable
      style={{
        width: "40%",
        margin: "2%",
        textAlign: "center",
        justifyContent: "center",
      }}
      cover={<img src={pet.upload} width="300px" />}
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
      {loading && <Spin size="large" />}
      {!loading && snapshots && (
        <div style={gridStyle}>
          {snapshots.map((snapshot) => (
            <Pet uid={snapshot.key} key={snapshot.key} pet={snapshot.val()} />
          ))}
        </div>
      )}
    </>
  );
};

export default Pets;
