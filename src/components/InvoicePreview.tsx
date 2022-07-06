import React, { useState, useEffect } from "react";
import { Col, Row, Typography, Space, Divider } from 'antd';
import type { ColumnsType } from 'antd/lib/table';
import moment from "moment";
import DataTable from "./DataTable";
import { InvoiceCalculationData, InvoiceData } from "./interface";

interface DataType {
    key: string;
    description: string;
    rate: number;
    qty: number;
    amount: number;
}

interface SubTotalDataType {
    key: string;
    description: string;
    amount: number;
}

const columns: ColumnsType<DataType> = [
    {
        title: 'Description',
        dataIndex: 'description',
        key: 'description',
        width: '55%',
    },
    {
        title: 'Rate',
        dataIndex: 'rate',
        key: 'rate',
    },
    {
        title: 'QTY',
        dataIndex: 'qty',
        key: 'qty',
    },
    {
        title: 'Amount',
        key: 'amount',
        dataIndex: 'amount',
        onCell: (_: DataType, index) => ({
            colSpan: index === 3 ? 3 : 1
        }),
    },
];

const subTotalcolumns: ColumnsType<SubTotalDataType> = [
    {
        title: 'Description',
        dataIndex: 'description',
        key: 'description',
        width: '55%',
    },
    {
        title: 'Amount',
        dataIndex: 'amount',
        key: 'amount',
    },
];



interface InvoicePreviewProps {
    invoiceData: InvoiceData
    calculationData: InvoiceCalculationData
}

const InvoicePreview: React.FC<InvoicePreviewProps> = (props) => {
    const { invoiceData, calculationData } = props;



    const renderSubTotalData = () => {
        const subTotalData: SubTotalDataType[] = [
            {
                key: '1',
                description: "Subtotal",
                amount: calculationData?.subTotal
            },
            {
                key: '2',
                description: "Tax (0%) (Default 5%)",
                amount: calculationData?.taxAmount
            },
            {
                key: '3',
                description: "Total",
                amount: calculationData?.total
            }
        ];
        return subTotalData;
    }



    return (
        <div className="invoiceForm">
            <Row gutter={32}>
                <Col xl={12} lg={12} md={24} sm={24} xs={24} className="gutter-row">
                    <Space direction="vertical" style={{ width: '100%' }}>
                        <Typography.Title level={4}>{invoiceData.fromName}</Typography.Title>
                        <Typography.Text>{invoiceData.fromAddress}</Typography.Text>
                        <Typography.Text>{invoiceData.fromPhone}{invoiceData.businessNumber && `, ${invoiceData.businessNumber}`}</Typography.Text>
                        <Typography.Text>{invoiceData.fromEmail}</Typography.Text>
                    </Space>
                </Col>
                <Col xl={12} lg={12} md={24} sm={24} xs={24}>
                    <Space direction="vertical" style={{ textAlign: 'right', width: '100%' }}>
                        <Typography.Title level={4}>INVOICE</Typography.Title>
                        <Typography.Text>Number: {invoiceData.invoiceNumber}</Typography.Text>
                        <Typography.Text>{`Date: ${moment(invoiceData.date).format('MMMM Do YYYY')}`}</Typography.Text>
                        <Typography.Text>Due: On Receipt</Typography.Text>
                        <Typography.Text>Balance Due: ${calculationData?.total}</Typography.Text>
                    </Space>
                </Col>
            </Row>
            <Divider />
            <Row style={{ marginBottom: '20px' }}>
                <Col xl={12} lg={12} md={24} sm={24} xs={24}>
                    <Space direction="vertical" style={{ width: '100%' }}>
                        <Typography.Text>BILL TO</Typography.Text>
                        <Typography.Text><span style={{ fontWeight: 'bold' }}>{invoiceData.toFullName}</span></Typography.Text>
                        <Typography.Text>{invoiceData.toAddress}</Typography.Text>
                        <Typography.Text>{invoiceData.toEmail}</Typography.Text>
                        <Typography.Text>{invoiceData.toPhone}</Typography.Text>
                    </Space>
                </Col>
            </Row>

            <DataTable columns={columns} data={invoiceData.invoiceTableData} pagination={false} />
            <Row gutter={32}>
                <Col span={8} className="gutter-row">
                </Col>
                <Col span={16}>
                    <DataTable columns={subTotalcolumns} data={renderSubTotalData()} pagination={false} />
                </Col>
            </Row>
        </div>
    )
}

export default InvoicePreview;