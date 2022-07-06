import React from "react";
import { Col, Row } from 'antd';
import LeftFrom from "./LeftFrom";
import RightFrom from "./RightForm";
import Itemtable from "./ItemTable";




const InvoiceLayout: React.FC<any> = (props) => {

    return (
        <div className="invoiceForm">
            <Row gutter={32}>
                <Col xl={12} lg={12} md={24} sm={24} xs={24} className="gutter-row">
                    <LeftFrom invoiceData={props.invoiceData} />
                </Col>
                <Col xl={12} lg={12} md={24} sm={24} xs={24}>
                    <RightFrom invoiceData={props.invoiceData} />
                </Col>
            </Row>

            <Itemtable />
        </div>
    )
}

export default InvoiceLayout;