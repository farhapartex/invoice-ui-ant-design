import React from "react";
import { Col, Row, Typography, Space, Divider } from 'antd';
import type { ColumnsType } from 'antd/lib/table';
import DataTable from "./DataTable";

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

const data: DataType[] = [
    {
        key: '1',
        description: "Consultation service- April'2022",
        rate: 20,
        qty: 128,
        amount: 2560
    },
    {
        key: '2',
        description: "Housing cost- April'2022",
        rate: 20,
        qty: 128,
        amount: 2560
    },
    {
        key: '3',
        description: "Housing cost- April'2022",
        rate: 20,
        qty: 128,
        amount: 2560
    }
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

const subTotalData: SubTotalDataType[] = [
    {
        key: '1',
        description: "Subtotal",
        amount: 2560
    },
    {
        key: '2',
        description: "Tax (0%)",
        amount: 0
    },
    {
        key: '3',
        description: "Total",
        amount: 2560
    }
];

const InvoicePreview: React.FC<any> = (props) => {
    const { invoiceData } = props;

    return (
        <div className="invoiceForm">
            <Row gutter={32}>
                <Col span={12} className="gutter-row">
                    <Space direction="vertical" style={{ width: '100%' }}>
                        <Typography.Title level={4}>{invoiceData.fromName}</Typography.Title>
                        <Typography.Text>{invoiceData.fromAddress}</Typography.Text>
                        <Typography.Text>{invoiceData.fromPhone}</Typography.Text>
                        <Typography.Text>{invoiceData.fromEmail}</Typography.Text>
                    </Space>
                </Col>
                <Col span={12}>
                    <Space direction="vertical" style={{ textAlign: 'right', width: '100%' }}>
                        <Typography.Title level={4}>INVOICE</Typography.Title>
                        <Typography.Text>Number: {invoiceData.invoiceNumber}</Typography.Text>
                        <Typography.Text>Date: Jul 4, 2022</Typography.Text>
                        <Typography.Text>Due: On Receipt</Typography.Text>
                        <Typography.Text>Balance Due: $3200</Typography.Text>
                    </Space>
                </Col>
            </Row>
            <Divider />
            <Row style={{ marginBottom: '20px' }}>
                <Col span={24}>
                    <Space direction="vertical" style={{ width: '100%' }}>
                        <Typography.Text>BILL TO</Typography.Text>
                        <Typography.Text><span style={{ fontWeight: 'bold' }}>{invoiceData.toFullName}</span></Typography.Text>
                        <Typography.Text>{invoiceData.toAddress}</Typography.Text>
                        <Typography.Text>{invoiceData.toEmail}</Typography.Text>
                        <Typography.Text>{invoiceData.toPhone}</Typography.Text>
                    </Space>
                </Col>
            </Row>

            <DataTable columns={columns} data={data} pagination={false} />
            <Row gutter={32}>
                <Col span={8} className="gutter-row">
                </Col>
                <Col span={16}>
                    <DataTable columns={subTotalcolumns} data={subTotalData} pagination={false} />
                </Col>
            </Row>
        </div>
    )
}

export default InvoicePreview;