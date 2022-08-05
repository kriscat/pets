import React from "react";
import { database } from "../../Firebase";
import { ref } from "firebase/database";
import { Card, Spin } from "antd";
import { useParams } from "react-router-dom";
import { useObject } from "react-firebase-hooks/database";
import { Image } from "antd";

// const gridStyle = {
//   width: "30%",
//   display: "flex",
//   textAlign: "left",
// };

const PetPage = () => {
  let params = useParams();

  const [snapshot, loading, error] = useObject(ref(database, "pet/"+params.uid));
console.log(params);
  return (
    <>
      {error && <strong>Ошибка: {error}</strong>}
      {loading && <Spin size="large" />}
      {snapshot && (
        <Card>
         
          
              <p> {params.uid}</p>
              <Image src={snapshot.val().upload} width={500} />
           

            <p>Место нахождения животного:</p>
            <p>Пол:</p>
            <p>Возраст:</p>
            <p>Есть ли паспорт:</p>
            <p>Есть ли обработка от блох и клещей:</p>
            <p>Есть ли необходимые прививки от вирусных заболеваний:</p>
            <p>Есть ли необходимая прививка от бешенства:</p>
            <p>Дополнительная информация:</p>
            <p>Номер телефона:</p>
        
        </Card>
      )}
    </>
  );
};

export default PetPage;
