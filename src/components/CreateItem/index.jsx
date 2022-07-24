import React, { useState } from "react";
import { Form, Input, Button, Radio, InputNumber, Modal, Select } from "antd";
import Upload from "antd/lib/upload/Upload";
import { database, storage } from "../../Firebase";
import { ref, set } from "firebase/database";
import { ref as storageref, uploadBytes, getDownloadURL } from "firebase/storage";
import { useNavigate } from "react-router-dom";

const { TextArea } = Input;

const customUpload = async ({ onError, onSuccess, file }) => {
  const metadata = {
    contentType: "image/jpeg",
  };
  console.log(file);

  const imagesRef = storageref(storage, "images/foto.jpg");
  uploadBytes(imagesRef, file)
    .then((snapshot) => {
      console.log("Uploaded a blob or file!");
      console.log(snapshot);
      onSuccess(snapshot);
    })
    .catch((e) => {
      onError(e);
      console.log(e);
    });
};

const Createitem = () => {
  const [form] = Form.useForm();

  const [isModalVisible, setIsModalVisible] = useState(false);
  let navigate = useNavigate();

  const handleSubmit = (values) => {
    const imagesRef = storageref(storage, "images/foto.jpg");
    console.log(values);

    getDownloadURL(imagesRef).then((downloadURL) => {
      values.upload = downloadURL;
      console.log("File available at", downloadURL);
      set(ref(database, "pet/1"), values);
      setIsModalVisible(true);
      Modal.success({
        content: "Ваше объявление успешно добавлено",
        onOk: () => {
          navigate("/");
        },
      });
    });
  };

  return (
    <>
      <Form form={form} layout="vertical" onFinish={handleSubmit} initialValues={{ moreInfo: "" }}>
        <h3>Новое объявление</h3>
        <Form.Item
          label="Выберите место нахождения питомца:"
          name="location"
          rules={[
            {
              required: true,
              message: "Укажите место нахождения питомца!",
            },
          ]}
        >
          <Select>
            <Select.Option value="tashkent">Ташкент и Ташкентская область</Select.Option>
            <Select.Option value="andijan">Андижанская область</Select.Option>
            <Select.Option value="bukhara">Бухарская область</Select.Option>
            <Select.Option value="djizak">Джизакская область</Select.Option>
            <Select.Option value="karakalpakstan">Каракалпакстан</Select.Option>
            <Select.Option value="kashkadarya">Кашкадарьинская область</Select.Option>
            <Select.Option value="navoi">Навоийская область</Select.Option>
            <Select.Option value="namangan">Наманганская область</Select.Option>
            <Select.Option value="samarkand">Самаркандская область</Select.Option>
            <Select.Option value="surkhandarya">Сурхандарьинская область</Select.Option>
            <Select.Option value="sirdarya">Сырдарьинская область</Select.Option>
            <Select.Option value="fergana">Ферганская область</Select.Option>
            <Select.Option value="khorezm">Хорезмская область</Select.Option>
          </Select>
        </Form.Item>
        {/* <Form.Item
          name="animalType"
          label={"Кого вы пристраиваете"}
          rules={[
            {
              required: true,
              message: "Укажите кого вы пристраиваете!",
            },
          ]}
        >
          <Radio.Group>
            <Radio value="сat"> кошка </Radio>
            <Radio value="dog"> собака </Radio>
            <Radio value="other"> другое </Radio>
          </Radio.Group>
        </Form.Item> */}

        {/* <Form.Item
          name="gender"
          label={"Укажите пол животного"}
          rules={[
            {
              required: true,
              message: "Укажите пол животного!",
            },
          ]}
        >
          <Radio.Group>
            <Radio value="female"> женский </Radio>
            <Radio value="male"> мужской </Radio>
          </Radio.Group>
        </Form.Item> */}

        {/* <Form.Item
          name="passport"
          label={"У животного есть паспорт?"}
          rules={[
            {
              required: true,
              message: "Укажите, есть ли у животного паспорт!",
            },
          ]}
        >
          <Radio.Group>
            <Radio value="passportYes"> да </Radio>
            <Radio value="passportNo"> нет </Radio>
          </Radio.Group>
        </Form.Item> */}

        {/* <Form.Item
          name="miteTreatment"
          label={"У животного есть обработка от клещей/блох?"}
          rules={[
            {
              required: true,
              message: "Укажите, есть ли у животного обработка от клещей/блох!",
            },
          ]}
        >
          <Radio.Group>
            <Radio value="mitetreaTmentyes"> да </Radio>
            <Radio value="mitetreaTmentno"> нет </Radio>
          </Radio.Group>
        </Form.Item> */}

        {/* <Form.Item
          name="viralVaccine"
          label={"У животного есть необходимые прививки от вирусных заболеваний?"}
          rules={[
            {
              required: true,
              message: "Укажите, есть ли у животного необходимые прививики от вирусных заболеваний!",
            },
          ]}
        >
          <Radio.Group>
            <Radio value="viralVaccineYes"> да </Radio>
            <Radio value="viralVaccineNo"> нет </Radio>
          </Radio.Group>
        </Form.Item> */}

        {/* <Form.Item
          name="rabiesVaccine"
          label={"У животного есть необходимые прививка от бешенства?"}
          rules={[
            {
              required: true,
              message: "Укажите, есть ли у животного прививка от бешенства!",
            },
          ]}
        >
          <Radio.Group>
            <Radio value="rabiesVaccineYes"> да </Radio>
            <Radio value="rabiesVaccineNo"> нет </Radio>
          </Radio.Group>
        </Form.Item> */}

        {/* <Form.Item
          name="age"
          label={"Укажите возраст животного"}
          rules={[
            {
              required: true,
              message: "Укажите возраст животного!",
            },
          ]}
        >
          <InputNumber min="0" max="99" step="0.1"></InputNumber>
        </Form.Item> */}

        {/* <Form.Item name="moreInfo" label={"Дополнительная информация"}>
          <TextArea />
        </Form.Item> */}

        <Form.Item
          name="upload"
          label={"Добавьте фото"}
          // valuePropName="fileList"
          rules={[
            {
              required: true,
              message: "Обязательно добавьте фото животного!",
            },
          ]}
        >
          <Upload name="petPhoto" customRequest={customUpload} listType="picture">
            <Button>Прикрепить фото</Button>
          </Upload>
        </Form.Item>

        {/* <Form.Item
          name="tel"
          label={"Введите номер телефона"}
          rules={[
            {
              required: true,
              message: "Укажите номер телефона!",
            },
          ]}
        >
          <Input></Input>
        </Form.Item> */}
        <Form.Item label={"Нажмите, чтоб опубликовать"}>
          <Button htmlType="submit" type="primary">
            Опубликовать
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default Createitem;
