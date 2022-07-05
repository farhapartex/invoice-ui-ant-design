import React from "react";
import { Col, Row, Typography, Space } from 'antd';

const InvoicePreview = () => {
    return (
        <div className="invoiceForm">
            <Row gutter={32}>
                <Col span={12} className="gutter-row">
                    <Space direction="vertical" style={{ width: '100%' }}>
                        <Typography.Title level={4}>Md Nazmul Hasan</Typography.Title>
                        <Typography.Text>35/1, Bananipara, Dhanshiri</Typography.Text>
                        <Typography.Text>Sunamganj Sadar</Typography.Text>
                        <Typography.Text>+8801636990528</Typography.Text>
                        <Typography.Text>hasan08sust@gmail.com</Typography.Text>
                    </Space>
                </Col>
                <Col span={12}>
                    <Space direction="vertical" style={{ textAlign: 'right', width: '100%' }}>
                        <Typography.Title level={4}>INVOICE</Typography.Title>
                        <Typography.Text>Number: INV001</Typography.Text>
                        <Typography.Text>Date: Jul 4, 2022</Typography.Text>
                        <Typography.Text>Due: On Receipt</Typography.Text>
                        <Typography.Text>Balance Due: $3200</Typography.Text>
                    </Space>
                </Col>
            </Row>
        </div>
    )
}

export default InvoicePreview;