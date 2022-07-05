import React from "react";
import { Col, Row } from 'antd';
import LeftFrom from "./LeftFrom";
import RightFrom from "./RightForm";
import Itemtable from "./ItemTable";




const InvoiceLayout: React.FC<any> = (props) => {

    return (
        <div className="invoiceForm">
            <Row gutter={32}>
                <Col span={12} className="gutter-row">
                    <LeftFrom invoiceData={props.invoiceData} />
                </Col>
                <Col span={12}>
                    <RightFrom invoiceData={props.invoiceData} />
                </Col>
            </Row>

            <Itemtable />
        </div>
    )
}

export default InvoiceLayout;