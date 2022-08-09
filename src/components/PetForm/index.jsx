import React, { useState, useCallback } from "react";
import { Form, Input, Button, Radio, InputNumber, Modal, Select } from "antd";
import Upload from "antd/lib/upload/Upload";
import { database, storage } from "../../Firebase";
import { ref, push, set } from "firebase/database";
import { ref as storageref, uploadBytes, getDownloadURL } from "firebase/storage";
import { useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../Firebase";
import { useMemo } from "react";

const { TextArea } = Input;

const customUpload = async ({ onError, onSuccess, file, data }) => {
  const imageRef = data.getImageRef(file.name);
  uploadBytes(imageRef, file, data)
    .then((snapshot) => {
      onSuccess(snapshot);
    })
    .catch((e) => {
      onError(e);
      console.log(e);
    });
};

const Petform = ({ data, pets  }) => {
  const [form] = Form.useForm();
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  const [isSaving, setIsSaving] = useState(false);
  const uid = useMemo(() => crypto.randomUUID(), []);
  const getImageRef = useCallback(
    (filename) => storageref(storage, `images/${user.uid}/${uid}-${filename}`),
    [user, uid],
  );

  const handleSubmit = (values) => {
    setIsSaving(true);
    // console.log(values);
    getDownloadURL(getImageRef(values.upload.file.name)).then((downloadURL) => {
      const petRef = ref(database, "pet");
      const newPetRef = pets || push(petRef);
      values.upload = downloadURL;
      // console.log("File available at", downloadURL);
      values.user_uid = user.uid;
      set(newPetRef, values);

      Modal.success({
        content: "Ваше объявление успешно добавлено!",
        onOk: () => {
          navigate("/");
        },
      });
    });
  };

  return (
    <>
      <Form form={form} layout="vertical" onFinish={handleSubmit} initialValues={data}>
       
        <Form.Item
          label="Выберите место нахождения питомца:"
          name="location"
          rules={[
            {
              required: true,
              message: "Поле должно быть заполнено!",
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
        <Form.Item
          name="type"
          label={"Кого вы пристраиваете"}
          rules={[
            {
              required: true,
              message: "Поле должно быть заполнено!",
            },
          ]}
        >
          <Radio.Group>
            <Radio value="cat"> кошка/кот </Radio>
            <Radio value="dog"> собака/пёс </Radio>
            <Radio value="other"> другое </Radio>
          </Radio.Group>
        </Form.Item>

        <Form.Item
          name="gender"
          label={"Укажите пол животного"}
          rules={[
            {
              required: true,
              message: "Поле должно быть заполнено!",
            },
          ]}
        >
          <Radio.Group>
            <Radio value="female"> женский </Radio>
            <Radio value="male"> мужской </Radio>
          </Radio.Group>
        </Form.Item>

        <Form.Item
          name="passport"
          label={"У животного есть паспорт?"}
          rules={[
            {
              required: true,
              message: "Поле должно быть заполнено!",
            },
          ]}
        >
          <Radio.Group>
            <Radio value="yes"> да </Radio>
            <Radio value="no"> нет </Radio>
          </Radio.Group>
        </Form.Item>

        <Form.Item
          name="mitetreatment"
          label={"У животного есть обработка от клещей/блох?"}
          rules={[
            {
              required: true,
              message: "Поле должно быть заполнено!",
            },
          ]}
        >
          <Radio.Group>
            <Radio value="yes"> да </Radio>
            <Radio value="no"> нет </Radio>
          </Radio.Group>
        </Form.Item>

        <Form.Item
          name="viralvaccine"
          label={"У животного есть необходимые прививки от вирусных заболеваний?"}
          rules={[
            {
              required: true,
              message: "Поле должно быть заполнено!",
            },
          ]}
        >
          <Radio.Group>
            <Radio value="yes"> да </Radio>
            <Radio value="no"> нет </Radio>
          </Radio.Group>
        </Form.Item>

        <Form.Item
          name="rabiesvaccine"
          label={"У животного есть прививка от бешенства?"}
          rules={[
            {
              required: true,
              message: "Поле должно быть заполнено!",
            },
          ]}
        >
          <Radio.Group>
            <Radio value="yes"> да </Radio>
            <Radio value="no"> нет </Radio>
          </Radio.Group>
        </Form.Item>

        <Form.Item
          name="age"
          label={"Укажите возраст животного"}
          rules={[
            {
              required: true,
              message: "Поле должно быть заполнено!",
            },
          ]}
        >
          <InputNumber min="0" max="99" step="0.1"></InputNumber>
        </Form.Item>

        <Form.Item name="moreinfo" label={"Дополнительная информация"}>
          <TextArea maxLength="600" />
        </Form.Item>

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
          <Upload
            name="petphoto"
            customRequest={customUpload}
            listType="picture"
            data={{ getImageRef }}
            accept="image/*"
          >
            <Button>Прикрепить фото</Button>
          </Upload>
        </Form.Item>

        <Form.Item
          name="tel"
          label={"Введите номер телефона"}
          rules={[
            {
              required: true,
              message: "Поле должно быть заполнено!",
            },
          ]}
        >
          <Input prefix="+998" maxLength="11"></Input>
        </Form.Item>

        <span>
          <b>Примечание: </b>
          <i>
            Информация о животном должна быть краткой и емкой. Убедитесь, чтобы все поля, помеченные символом *
            были заполнены.
          </i>
        </span>

        <br />
        <br />
        <Form.Item label={"Нажмите, чтоб опубликовать"}>
          <Button htmlType="submit" type="primary" loading={isSaving}>
            Опубликовать
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default Petform;
