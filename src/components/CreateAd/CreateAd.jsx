// import React from 'react';
// import {Form, Input, Button, Radio, Select} from 'antd';
// import style from "./CreateAd.module.css";
// import Upload from 'antd/lib/upload/Upload';

// const { TextArea } = Input;
// const { Option } = Select;

// const CreateAd = () => {
//     const [form] = Form.useForm();
//     return (
//         <Form
//             form={form}
//             labelCol={{ span: 4, }}
//             wrapperCol={{ span: 14, }}
//             layout="horizontal"
//             className={style.form}
//         >
//             <Form.Item label="Новое объявление" name="newAd" className={style.name}>
//             </Form.Item>
//             <Form.Item label={<i>1. Кого вы пристраиваете?</i>}
//                 rules={[
//                     {
//                         required: true,
//                         message: "Выберите кого вы пристраиваете!",
                        
//                     },
//                 ]}
//            >
//                 <Radio.Group>
//                     <Radio value="сat"> кошка </Radio>
//                     <Radio value="dog"> собака </Radio>
//                     <Radio value="other"> другое </Radio>
//                 </Radio.Group>
//             </Form.Item>
            
//             <Form.Item label={<i>2. Укажите пол животного:</i>}
//                 rules={[
//                     {
//                         required: true,
//                         message: "Укажите пол животного!",
//                     },
//                 ]}>
                
//                 <Radio.Group>
//                     <Radio value="female"> женский </Radio>
//                     <Radio value="male"> мужской </Radio>
//                 </Radio.Group>
//             </Form.Item>

//             <Form.Item label={<i>3. У животного есть паспорт?</i>}
//                 rules={[
//                     {
//                         required: true,
//                         message: "Выберите, есть ли у животного паспорт!",
//                     },
//                 ]}>
                
               
//                 <Radio.Group>
//                     <Radio value="passyes"> да </Radio>
//                     <Radio value="passno"> нет </Radio>
//                 </Radio.Group>
//             </Form.Item>

//             <Form.Item label=  {<i>4. У животного есть обработка от клещей/блох?</i>}
//                 rules={[
//                     {
//                         required: true,
//                         message: "Выберите, есть ли у животного обработка от клещей/блох!",
//                     },
//                 ]}>
//                 <Radio.Group>
//                     <Radio value="yes"> да </Radio>
//                     <Radio value="no"> нет </Radio>
//                 </Radio.Group>
//             </Form.Item>

//             <Form.Item label=  {<i>5. У животного есть необходимые прививки от вирусных заболеваний?</i>}
//                 rules={[
//                     {
//                         required: true,
//                         message: "Выберите, есть ли у животного необходимые прививики от вирусных заболеваний!",
//                     },
//                 ]}>
//                 <Radio.Group>
//                     <Radio value="yes"> да </Radio>
//                     <Radio value="no"> нет </Radio>
//                 </Radio.Group>
//             </Form.Item>
//                 <Form.Item label={<i>6. У животного есть необходимые прививка от бешенства?</i>}
//                 rules={[
//                     {
//                         required: true,
//                         message: "Выберите, есть ли у животного прививка от бешенства!",
//                     },
//                 ]}>
//                 <Radio.Group>
//                     <Radio value="yes"> да </Radio>
//                     <Radio value="no"> нет </Radio>
//                 </Radio.Group>
//             </Form.Item>

         
//                 <Form.Item label={<i>7. Укажите возраст животного </i>}
//                 rules={[
//                     {
//                         required: true,
//                         message: "Укажите возраст животного!",
//                     },
//                 ]}>
//                 <Radio.Group className={style.age} >
//                     <Radio value="oneless"> до 1 года </Radio>
//                     <Radio value="one"> 1 год </Radio>
//                     <Radio value="two"> 2 года </Radio>
//                     <Radio value="twomore"> больше двух лет </Radio>
//                 </Radio.Group>
//             </Form.Item>
           
//             <Form.Item label={<i>8.Дополнительная информация</i>}
//             >
//                 <TextArea rows={4} />
//             </Form.Item>
           
//             <Form.Item
//                 name="upload"
//                 label= {<i>9. Добавьте фото</i>}
//                 valuePropName="fileList"
//                 rules={[
//                     {
//                         required: true,
//                         message: "Обязательно добавьте фото животного!",
                        
//                     },
//                 ]}>
//                 <Upload name="logo" action="/upload.do" listType="picture">
//                     <Button className={style.addphoto} >Прикрепить фото</Button>
//                 </Upload>
                
//             </Form.Item>

//             <Form.Item label=  {<i>Введите номер телефона: </i>}>
//                 <Input></Input>
//             </Form.Item>
            
        
            

//                 <Form.Item label={<i>Нажмите, чтоб опубликовать </i>}
//                 htmlType="submit"
//             >
//                 <Button htmlType="submit" className={style.submitbutton}>Опубликовать</Button>
//             </Form.Item>
//         </Form>
//     );
// };

// export default () => <CreateAd />;

import { Button, Checkbox, Form, Input } from 'antd';

const App = () => {
    const onFinish = (values) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <Form
            name="basic"
            labelCol={{
                span: 9,
            }}
            wrapperCol={{
                span: 7,
            }}
            initialValues={{
                remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
        >
            <Form.Item
                label="Username"
                name="username"
                rules={[
                    {
                        required: true,
                        message: 'Please input your username!',
                    },
                ]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                label="Password"
                name="password"
                rules={[
                    {
                        required: true,
                        message: 'Please input your password!',
                    },
                ]}
            >
                <Input.Password />
            </Form.Item>
{/* sdfsdfd */}
            <Form.Item
                name="remember"
                valuePropName="checked"
                wrapperCol={{
                    offset: 8,
                    span: 16,
                }}
            >
                <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <Form.Item
                wrapperCol={{
                    offset: 8,
                    span: 16,
                }}
            >
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>
        </Form>
    );
};

export default App;