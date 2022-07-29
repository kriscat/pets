import React from "react";
import { database } from "../../Firebase";
import { ref } from "firebase/database";
import { Card, Spin } from "antd";
import { useParams } from "react-router-dom";
import { useObject } from "react-firebase-hooks/database";
import { Image } from "antd";

const PetPage = () => {
  let params = useParams();

  const [snapshot, loading, error] = useObject(ref(database, "pet/"+params.uid));

  return (
    <>
      {error && <strong>Ошибка: {error}</strong>}
      {loading && <Spin size="large" />}
      {snapshot && (
        <Card>
          <p> {params.uid}</p>

          <Image src={snapshot.val().upload} width={200} preview={"fbd"} />
        </Card>
      )}
    </>
  );
};

export default PetPage;
