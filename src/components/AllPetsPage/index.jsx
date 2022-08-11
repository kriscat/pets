import { LoadingOutlined } from "@ant-design/icons";
import { Card, Col, Row, Image } from "antd";
import Meta from "antd/lib/card/Meta";
import React from "react";
import { useNavigate } from "react-router-dom";
import catIcon from "../../images/caticon.svg";
import dogIcon from "../../images/dogicon.svg";
import hamsterIcon from "../../images/hamstericon.svg";
import HomeBtn from "../HomeBtn";
const cardStyle = {
  width: "22%",
  margin: "2%",
  padding: "1%",
};
const colStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "1%",
  margin: "1% auto",
};
const AllPetsPage = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="site-card-wrapper">
        <Row>
          <Col span={24} style={colStyle}>
            <Card
              hoverable
              style={cardStyle}
              cover={
                <Image
                  preview={false}
                  placeholder={
                    <LoadingOutlined style={{ fontSize: "25px", margin: "auto 50%", color: "rebeccapurple" }} />
                  }
                  src={catIcon}
                ></Image>
              }
              onClick={() => navigate("/cats")}
            >
              <Meta title="Кошки" />
            </Card>
            <Card
              hoverable
              style={cardStyle}
              cover={
                <Image
                  preview={false}
                  placeholder={
                    <LoadingOutlined style={{ fontSize: "25px", margin: "auto 50%", color: "rebeccapurple" }} />
                  }
                  src={dogIcon}
                ></Image>
              }
              onClick={() => navigate("/dogs")}
            >
              <Meta title="Собаки" />
            </Card>
            <Card
              hoverable
              style={cardStyle}
              cover={
                <Image
                  preview={false}
                  placeholder={
                    <LoadingOutlined style={{ fontSize: "25px", margin: "auto 50%", color: "rebeccapurple" }} />
                  }
                  src={hamsterIcon}
                ></Image>
              }
              onClick={() => navigate("/other-pets")}
            >
              <Meta title="Другие питомцы" />
            </Card>
          </Col>
        </Row>
      </div>

      <HomeBtn />
    </>
  );
};

export default AllPetsPage;
