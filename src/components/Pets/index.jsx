import React from "react";
import { database } from "../../Firebase";
import { ref, query, equalTo, orderByChild } from "firebase/database";
import { useList } from "react-firebase-hooks/database";
import { Card, Spin } from "antd";
import { NavLink } from "react-router-dom";

const gridStyle = {
  width: "25%",
  textAlign: "left",
};

const Pet = ({ pet, uid } /*:Pet*/) => {
  console.log(uid);
  return (
    <Card.Grid style={gridStyle}>
      <img src={pet.upload} width="200px" />
      <>
        <div>
          <b>Возраст: </b>
          {pet.age}
        </div>
        <div>
          <b>Пол: </b>
          {pet.gender == "female" ? "женский" : "мужской"}
        </div>
        <NavLink to={"/pet/" + uid}>
          <b>Подробнее</b>
        </NavLink>
      </>
    </Card.Grid>
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
        <Card title="Объявления по пристройству">
          {snapshots.map((snapshot) => (
            <Pet uid={snapshot.key} key={snapshot.key} pet={snapshot.val()} />
          ))}
        </Card>
      )}
    </>
  );
};

export default Pets;
