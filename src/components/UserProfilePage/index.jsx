import React from "react";
import { auth, database } from "../../Firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useList } from "react-firebase-hooks/database";
import { DeleteOutlined, EditOutlined, LoadingOutlined } from "@ant-design/icons";
import { Card, Spin, Image, Row, Col } from "antd";
import { equalTo, orderByChild, ref, query, remove } from "firebase/database";
import { NavLink, useNavigate } from "react-router-dom";

const { Meta } = Card;

const colStyle = {
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  alignItems: "center",
  padding: "1%",
  margin: "1% auto",
};

const InnerUserProfile = (props) => {
  const user = props.user;
  const petRef = query(ref(database, "/pet"), orderByChild("user_uid"), equalTo(user.uid));
  const [snapshots, loading, error] = useList(petRef);

  console.log(snapshots, loading, error);
  return (
    <>
      <strong>Вы вошли, как {user.email}</strong>
      {error && <strong>Ошибка: {error}</strong>}
      {loading && <Spin style={{ margin: "10px 50%" }} size="large" />}
      {!loading && snapshots && (
        <div className="site-card-wrapper">
          <Row gutter={24}>
            <Col span={24} style={colStyle}>
              {snapshots.map((snapshot) => (
                <PetCard uid={snapshot.key} key={snapshot.key} pet={snapshot.val()} />
              ))}
            </Col>
          </Row>
        </div>
      )}
    </>
  );
};

const PetCard = ({ pet, uid }) => {
  const navigate = useNavigate();
  const deletePet = () => {
    remove(ref(database, `/pet/${uid}`));
    navigate("/");
  };

  const animalType = () => {
    if (pet.type === "cat") {
      return "кошка / кот";
    } else if (pet.type === "dog") {
      return "собака (пёс)";
    } else if (pet.type === "other") {
      return "другое";
    } else {
      return "животное";
    }
  };

  return (
    <Card
      bordered={true}
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
            <LoadingOutlined style={{ fontSize: "30px", margin: "10px 50%", color: "rebeccapurple" }} />
          }
        />
      }
      actions={[
        <NavLink to={`/pet/${uid}/edit`}>
          <EditOutlined key="edit" />
        </NavLink>,
        <DeleteOutlined key="delete" onClick={deletePet} />,
      ]}
    >
      <Meta title={`Питомец: ${animalType()}`} />
    </Card>
  );
};

const UserProfile = () => {
  const [user] = useAuthState(auth);
  if (user !== null) {
    return <InnerUserProfile user={user} />;
  }
};

export default UserProfile;
