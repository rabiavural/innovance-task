import React from 'react'
import { useSelector } from "react-redux";
import { Form, Input} from 'antd';
import Wrapper from '../Wrapper';


const User = () => {
    const userInfoDetail = useSelector((state) => state.userReducer.userInfo);

    return (
        <Wrapper>
       <Form
            name="basic"
            labelCol={{
                span: 8,
            }}
            wrapperCol={{
                span: 16,
            }}        >
            <Form.Item
                label="Name"
                name="name"
            >
                <Input defaultValue={userInfoDetail.name} />
            </Form.Item>
            <Form.Item
                label="Surname"
                name="surname"
            >
                <Input defaultValue={userInfoDetail.surname} />
            </Form.Item>
            <Form.Item
                label="Username"
                name="username"
            >
                <Input defaultValue={userInfoDetail.username} />
            </Form.Item>

        </Form>
        </Wrapper>
    )
}

export default User