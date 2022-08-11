import React from "react";
import { auth, database } from "../../Firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useList } from "react-firebase-hooks/database";
import { DeleteOutlined, EditOutlined, LoadingOutlined } from "@ant-design/icons";
import { Card, Spin, Image, Row, Col } from "antd";
import { equalTo, orderByChild, ref, query, remove } from "firebase/database";
import { NavLink } from "react-router-dom";
import { Content } from "antd/lib/layout/layout";
const { Meta } = Card;

const InnerUserProfile = (props) => {
  const user = props.user;
  const petRef = query(ref(database, "/pet"), orderByChild("user_uid"), equalTo(user.uid));
  const [snapshots, loading, error] = useList(petRef);
  // const deletePet = () => {
  //      return (
  //     <>
  //       {error && <strong>Ошибка: {error}</strong>}
  //       {loading && <Spin style={{ margin: "10px 50%" }} size="large" />}
  //       {!loading && (remove(ref(database, "/pet")))}
  //     </>
  //   );
  // };

  // console.log(snapshots);
  return (
    <>
      <strong>Вы вошли, как {user.email}</strong>
      {error && <strong>Ошибка: {error}</strong>}
      {loading && <Spin style={{ margin: "10px 50%" }} size="large" />}
      {!loading && snapshots && (
        <Content className="site-card-wrapper">
          <Row gutter={24}>
            <Col span={8}>
              <div>
                {snapshots.map((snapshot) => (
                  <PetCard uid={snapshot.key} key={snapshot.key} pet={snapshot.val()}  />
                ))}
              </div>
            </Col>
          </Row>
        </Content>
      )}
    </>
  );
};

const PetCard = ({ pet, uid }) => {
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
    <div>
      <Card
        bordered={true}
        style={{
          width: "80%",
        }}
        cover={
          <Image
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
          <DeleteOutlined key="delete"  />,
        ]}
      >
        <Meta title={`Питомец: ${animalType()}`} />
      </Card>
    </div>
  );
};

const UserProfile = () => {
  const [user] = useAuthState(auth);
  if (user !== null) {
    return <InnerUserProfile user={user} />;
  }
};

export default UserProfile;
