import React from "react";
import { Col, Row } from 'antd';
import LeftFrom from "./LeftFrom";
import RightFrom from "./RightForm";
import Itemtable from "./ItemTable";

const InvoiceLayout: React.FC = () => {
    return (
        <div className="invoiceForm">
            <Row gutter={32}>
                <Col span={12} className="gutter-row">
                    <LeftFrom />
                </Col>
                <Col span={12}>
                    <RightFrom />
                </Col>
            </Row>

            <Itemtable />
        </div>
    )
}

export default InvoiceLayout;