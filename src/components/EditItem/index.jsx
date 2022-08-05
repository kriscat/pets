import React from "react";
import Petform from "../PetForm";
import { database } from "../../Firebase";
import { ref } from "firebase/database";
import { useParams } from "react-router-dom";
import { useObject } from "react-firebase-hooks/database";
import { Spin } from "antd";

const EditItem = () => {
      let params = useParams();
     const [snapshot, loading, error] = useObject(ref(database, "pet/" + params.uid));
  return (
    <>
      {error && <strong>Ошибка: {error}</strong>}
      {loading && <Spin size="large" />}
      {snapshot && (
        <>
          <h3>Редактировать объявление</h3>
          <Petform data={snapshot.val()} />
        </>
      )}
    </>
  );
};

export default EditItem;
