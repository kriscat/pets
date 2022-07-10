import React from 'react';
import {Form, Input, Button, Radio, Select} from 'antd';
import style from "./CreateAd.module.css";
import Upload from 'antd/lib/upload/Upload';

const { TextArea } = Input;
const { Option } = Select;

const CreateAd = () => {
    const [form] = Form.useForm();
    return (
        <Form
            form={form}
            labelCol={{ span: 13, }}
            wrapperCol={{ span: 6, }}
            layout="horisontal">
            <Form.Item label="Новое объявление" name="newAd" className={style.root}>
            </Form.Item>
            <Form.Item name="animal" label={"1. Кого вы пристраиваете"}
                         rules={[
                    {
                        required: true, 
                        message: "Укажите кого вы пристраиваете!",
                    },
                ]}>
                <Radio.Group>
                    <Radio value="сat"> кошка </Radio>
                    <Radio value="dog"> собака </Radio>
                    <Radio value="other"> другое </Radio>
                </Radio.Group>
            </Form.Item>
            
            <Form.Item name="gender" label={"2. Укажите пол животного"}
                rules={[
                    {
                        required: true,
                        message: "Укажите пол животного!",
                    },
                ]}>
                
                <Radio.Group>
                    <Radio value="female"> женский </Radio>
                    <Radio value="male"> мужской </Radio>
                </Radio.Group>
            </Form.Item>

         
            <Form.Item name="pass" label={"3. У животного есть паспорт?"}
                rules={[
                    {
                        required: true,
                        message: "Укажите, есть ли у животного паспорт!",
                    },
                ]}>
                
               
                <Radio.Group>
                    <Radio value="passyes"> да </Radio>
                    <Radio value="passno"> нет </Radio>
                </Radio.Group>
            </Form.Item>

            <Form.Item name="mite" label=  {"4. У животного есть обработка от клещей/блох?"}
                rules={[
                    {
                        required: true,
                        message: "Укажите, есть ли у животного обработка от клещей/блох!",
                    },
                ]}>
                <Radio.Group>
                    <Radio value="yes"> да </Radio>
                    <Radio value="no"> нет </Radio>
                </Radio.Group>
            </Form.Item>

            <Form.Item name="vaccinationOne" label=  {"5. У животного есть необходимые прививки от вирусных заболеваний?"}
                rules={[
                    {
                        required: true,
                        message: "Укажите, есть ли у животного необходимые прививики от вирусных заболеваний!",
                    },
                ]}>
                <Radio.Group>
                    <Radio value="yes"> да </Radio>
                    <Radio value="no"> нет </Radio>
                </Radio.Group>
            </Form.Item>
           
            <Form.Item name="vaccinationTwo" label={"6. У животного есть необходимые прививка от бешенства?"}
                rules={[
                    {
                        required: true,
                        message: "Укажите, есть ли у животного прививка от бешенства!",
                    },
                ]}>
                <Radio.Group>
                    <Radio value="yes"> да </Radio>
                    <Radio value="no"> нет </Radio>
                </Radio.Group>
            </Form.Item>

            <Form.Item name="age" label={"7.Укажите возраст животного"}
                rules={[
                    {
                        required: true,
                        message: "Укажите возраст животного!",
                    },
                ]}
            >
                
                <Input></Input>
            </Form.Item>
               
           
            <Form.Item name="moreInfo" label={"8.Дополнительная информация"
            }
            >
                <TextArea rows={4} />
            </Form.Item>
           
            <Form.Item
                name="upload"
                label= {"9.Добавьте фото"}
                valuePropName="fileList"
                rules={[
                    {
                        required: true,
                        message: "Обязательно добавьте фото животного!",
    
                    },
                ]}>
                <Upload name="logo" action="/upload.do" listType="picture">
                    <Button className={style.addphoto} >Прикрепить фото</Button>
                </Upload>
                
            </Form.Item>

            <Form.Item name="tel" label={"Введите номер телефона"}
                rules={[
                    {
                        required: true,
                        message: "Укажите номер телефона!",
                    },
                ]}>
                <Input></Input>
                
            </Form.Item>
                <Form.Item label={"Нажмите, чтоб опубликовать"}
                htmlType="submit">
                <Button htmlType="submit" className={style.submitbutton}>Опубликовать</Button>
            </Form.Item>
        </Form>
    );
};

export default () => <CreateAd />;
