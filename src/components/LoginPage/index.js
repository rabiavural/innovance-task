import React from 'react'
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import * as userActions from '../../redux/actions/userActions';
import { Form, Input, Button, Card } from 'antd';
import { user } from '../../constant'

import './index.scss'

const LoginPage = () => {

  const dispatch = useDispatch();
  const history = useHistory();
  const navigateTo = () => history.push("/main");

  const onFinish = (values) => {
    user.map(item => {
      if (item.username === values.username && item.password === values.password) {
        dispatch(userActions.getUserInfo(item));
        navigateTo()
      }
    })
  };

  return (
    <div className='container'>
      <Card>
        <Form
          name="basic"
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 16,
          }}
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
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
      </Card>
    </div>
  )
}
export default LoginPage;
