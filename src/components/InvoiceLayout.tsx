import React from "react";
import { Col, Row } from 'antd';
import LeftFrom from "./LeftFrom";
import RightFrom from "./RightForm";
import Itemtable from "./ItemTable";
import { InvoiceData } from "./interface";


interface InvoiceLayoutProps {
    invoiceData: InvoiceData
}

const InvoiceLayout: React.FC<InvoiceLayoutProps> = (props) => {
    const { invoiceData } = props;

    return (
        <div className="invoiceForm">
            <Row gutter={32}>
                <Col xl={12} lg={12} md={24} sm={24} xs={24} className="gutter-row">
                    <LeftFrom invoiceData={invoiceData} />
                </Col>
                <Col xl={12} lg={12} md={24} sm={24} xs={24}>
                    <RightFrom invoiceData={invoiceData} />
                </Col>
            </Row>

            <Itemtable />
        </div>
    )
}

export default InvoiceLayout;