import React from "react";
import { database } from "../../Firebase";
import { ref } from "firebase/database";
import { Col, Row, Spin } from "antd";
import { useParams } from "react-router-dom";
import { useObject } from "react-firebase-hooks/database";
import { Image } from "antd";
import locations from "../../locations";
import "./styles.less";
import { LoadingOutlined } from "@ant-design/icons";
import StepBackButton from "../StepBackButton";



const PetDesctiption = ({ data }) => {
  const locationObj = locations.find((location) => {
    return location.key === data.location;
  });
    
  
  return (
    <>
      <StepBackButton/>
    
      <div className="block">
        <Row align={"middle"} justify={"center"}>
          {/* <p> {params.uid}</p> */}
          <Col span={12}>
            <div className="image">
              <Image
                src={data.upload}
                width={"100%"}
                placeholder={
                  <LoadingOutlined style={{ fontSize: "40px", margin: "auto 50%", color: "rebeccapurple" }} />
                }
              />
            </div>
          </Col>

          <Col span={12}>
            <p>
              <span className="featureNames"> Место нахождения животного:</span> {locationObj.value}
            </p>
            <p>
              <span className="featureNames">Пол: </span>
              {data.gender === "female" ? "женский" : "мужской"}{" "}
            </p>
            <p>
              <span className="featureNames"> Возраст: </span>
              {data.age}
            </p>
            <p>
              <span className="featureNames"> Есть ли паспорт: </span>
              {data.passport === "yes" ? "да" : "нет"}
            </p>
            <p>
              <span className="featureNames">Есть ли обработка от блох и клещей: </span>
              {data.mitetreatment === "yes" ? "да" : "нет"}
            </p>
            <p>
              <span className="featureNames"> Есть ли прививки от вирусных заболеваний: </span>
              {data.viralvaccine === "yes" ? "да" : "нет"}
            </p>
            <p>
              <span className="featureNames"> Есть ли прививка от бешенства: </span>
              {data.rabiesvaccine === "yes" ? "да" : "нет"}
            </p>
            <p>
              <span className="featureNames"> Дополнительная информация: </span>
              {data.moreinfo}
            </p>
            <p>
              <span className="featureNames">Номер телефона: </span>
              {data.tel}
            </p>
          </Col>
        </Row>
      </div>
    </>
  );
};

const PetPage = () => {
  let params = useParams();
  const [snapshot, loading, error] = useObject(ref(database, "pet/" + params.uid));

  console.log(params);
  return (
    <>
      {error && <strong>Ошибка: {error}</strong>}
      {loading && <Spin className="spin" size="large" />}
      {snapshot && <PetDesctiption data={snapshot.val()} />}
    </>
  );
};

export default PetPage;
