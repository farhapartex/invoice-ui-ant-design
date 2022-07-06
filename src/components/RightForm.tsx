import React from "react";
import { Typography, Form, Input } from 'antd';
import { InvoiceData } from "./interface";

interface RightFormProps {
    invoiceData: InvoiceData
}

const RightFrom: React.FC<RightFormProps> = (props) => {
    const { invoiceData } = props;

    const handleTaxPercentageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        let value = e.target.value;
        value ? invoiceData.setTaxPercent(parseFloat(value)) : invoiceData.setTaxPercent(0.0);
    }

    return (
        <div>
            <Typography.Title level={4}>To</Typography.Title>
            <Form labelCol={{ span: 8 }} wrapperCol={{ span: 17 }} layout="horizontal">
                <Form.Item label="Full Name">
                    <Input placeholder="Ex: Jhon Doer" value={invoiceData.toFullName} onChange={(e) => { invoiceData.setToFullName(e.target.value) }} />
                </Form.Item>
                <Form.Item label="Email">
                    <Input placeholder="Ex: test@example.com" value={invoiceData.toEmail} onChange={(e) => { invoiceData.setToEmail(e.target.value) }} />
                </Form.Item>
                <Form.Item label="Address">
                    <Input placeholder="Ex: 45/1, Test street" value={invoiceData.toAddress} onChange={(e) => { invoiceData.setToAddress(e.target.value) }} />
                </Form.Item>
                <Form.Item label="Phone">
                    <Input placeholder="Ex: +9685236985" value={invoiceData.toPhone} onChange={(e) => { invoiceData.setToPhone(e.target.value) }} />
                </Form.Item>
                <Form.Item label="Tax Percent (%)" extra="Use round number(1,2,..). To change refresh the page.">
                    <Input placeholder="Ex: 5" value={invoiceData.taxPercent} onChange={(e) => { handleTaxPercentageChange(e) }} />
                </Form.Item>
            </Form>
        </div>
    )
}

export default RightFrom;