import React from "react";
import { Typography, Form, Input, DatePicker } from 'antd';
import { InvoiceData } from "./interface";
import moment from "moment";


interface LeftFormProps {
    invoiceData: InvoiceData
}

const LeftFrom: React.FC<LeftFormProps> = (props) => {
    const { invoiceData } = props;
    const dateFormat = 'DD/MM/YYYY';

    return (
        <div>
            <Typography.Title level={4}>From</Typography.Title>
            <Form labelCol={{ span: 8 }} wrapperCol={{ span: 18 }} layout="horizontal">
                <Form.Item label="Full Name">
                    <Input placeholder="Ex: Jhon Doer" value={invoiceData.fromName} onChange={(e) => { invoiceData.setFromName(e.target.value) }} />
                </Form.Item>
                <Form.Item label="Email">
                    <Input placeholder="Ex: test@example.com" value={invoiceData.fromEmail} onChange={(e) => { invoiceData.setFromEmail(e.target.value) }} />
                </Form.Item>
                <Form.Item label="Address">
                    <Input placeholder="Ex: 45/1, Test street" value={invoiceData.fromAddress} onChange={(e) => { invoiceData.setFromAddress(e.target.value) }} />
                </Form.Item>
                <Form.Item label="Phone">
                    <Input placeholder="Ex: +9685236985" value={invoiceData.fromPhone} onChange={(e) => { invoiceData.setFromPhone(e.target.value) }} />
                </Form.Item>
                <Form.Item label="Business Number">
                    <Input placeholder="Ex: +9685236985" value={invoiceData.businessNumber} onChange={(e) => { invoiceData.setBusinessNumber(e.target.value) }} />
                </Form.Item>
                <Form.Item label="Invoice Number">
                    <Input placeholder="Ex: INV001" value={invoiceData.invoiceNumber} onChange={(e) => { invoiceData.setInvoiceNumber(e.target.value) }} />
                </Form.Item>
                <Form.Item label="Date">
                    <DatePicker value={moment(invoiceData.date)} format={dateFormat} onChange={(date, dString) => { invoiceData.setDate(new Date(dString)) }} />
                </Form.Item>
            </Form>
        </div>
    )
}

export default LeftFrom;