import React from 'react';
import { Card, Col, Row } from 'antd';
import { Content } from 'antd/lib/layout/layout';
import { PhoneOutlined } from '@ant-design/icons';
import HomeBtn from '../HomeBtn';

const cardsData = [
  {
    clinic: "Doctor-Animals",
    region: "Район: Мирзо-улугбекский район",
    address: "Адрес: Ташкент, м-в Ялангач 27А",
    tel: "71 263 30 70",
  },
  {
    clinic: "Vet-Drug",
    region: "Район: Мирзо-улугбекский район",
    address: "Адрес: Ташкент, ул. Буюк Ипак Йули, 473, офис 19",
    tel: "71 261 63 39",
  },
  {
    clinic: "Пульс",
    region: "Район: Мирзо-улугбекский район",
    address: "Адрес: проспект Мирзо-Улугбека, 40 ",
    tel: "97 344 08 47",
  },
  {
    clinic: "Vet Evo",
    region: "Район: Мирзо-улугбекский район",
    address: "Адрес:  Ташкент,  м-в Ялангач, 25 Б",
    tel: "95 145 54 77",
  },
  {
    clinic: "Ligavet",
    region: "Район: Мирабадский район",
    address: "Адрес: ул. А.Фитрата, 59",
    tel: "98 123 78 39",
  },
  {
    clinic: "Zoo Doctor",
    region: "Район: Мирабадский район",
    address: "Адрес: ул. Мирабадская, 33",
    tel: "97 754 54 50",
  },
  {
    clinic: "Импульс",
    region: "Район: Чиланзарский район",
    address: "Адрес: Чиланзар 11, 34  ",
    tel: "99 088 63 12",
  },
  {
    clinic: "Дарел",
    region: "Район: Яшнабадский район",
    address: "Адрес: ул. Насаф, 1/1",
    tel: "71 268 188 5",
  },
  {
    clinic: "Doctor Vet",
    region: "Район: Яшнабадский район",
    address: "Адрес: м-в Авиасозлар 2, 56 ",
    tel: "71 2973487",
  },
  {
    clinic: "Vet Profi",
    region: "Район: Яккасарайский район",
    address: "Адрес: ул. Братислава, 5 ",
    tel: "71 255 75 01",
  },

]


const Hospital = () => {
    return (
      <Content className="site-card-wrapper">
        <Row gutter={24}>
          {cardsData.map((e) => (
            <Col span={8}>
              <Card title={e.clinic} bordered={true}>
                <p>{e.region}</p>
                <p>{e.address}</p>
                <a href={"tel:" + e.tel}>
                  <PhoneOutlined style={{ fontSize: "20px" }} /> {e.tel}
                </a>
              </Card>
            </Col>
          ))}
        </Row>
        <HomeBtn />
      </Content>
    );
 
  }


export default Hospital;