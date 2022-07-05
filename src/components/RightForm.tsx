import React from "react";
import { Typography, Form, Input, DatePicker } from 'antd';

const RightFrom: React.FC = () => {
    return (
        <div>
            <Typography.Title level={4}>To</Typography.Title>
            <Form labelCol={{ span: 6 }} wrapperCol={{ span: 17 }} layout="horizontal">
                <Form.Item label="Full Name">
                    <Input placeholder="Ex: Jhon Doer" />
                </Form.Item>
                <Form.Item label="Email">
                    <Input placeholder="Ex: test@example.com" />
                </Form.Item>
                <Form.Item label="Address">
                    <Input placeholder="Ex: 45/1, Test street" />
                </Form.Item>
                <Form.Item label="Phone">
                    <Input placeholder="Ex: +9685236985" />
                </Form.Item>
            </Form>
        </div>
    )
}

export default RightFrom;