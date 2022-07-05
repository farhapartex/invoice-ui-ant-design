import React from "react";
import { Breadcrumb, Layout, Col, Row } from 'antd';
import HeaderMenu from "../components/HeaderMenu";
import InvoiceLayout from "../components/InvoiceLayout";
import InvoicePreview from "../components/InvoicePreview";

const { Header, Content, Footer } = Layout;

export interface InvoiceData {
    fromName: string,
    setFromName: React.Dispatch<React.SetStateAction<string>>,
    fromEmail: string,
    setFromEmail: React.Dispatch<React.SetStateAction<string>>,
    fromAddress: string,
    setFromAddress: React.Dispatch<React.SetStateAction<string>>,
    fromPhone: string,
    setFromPhone: React.Dispatch<React.SetStateAction<string>>,
    businessNumber: string,
    setBusinessNumber: React.Dispatch<React.SetStateAction<string>>,
    invoiceNumber: string,
    setInvoiceNumber: React.Dispatch<React.SetStateAction<string>>,
    toFullName: string,
    setToFullName: React.Dispatch<React.SetStateAction<string>>,
    toEmail: string,
    setToEmail: React.Dispatch<React.SetStateAction<string>>,
    toAddress: string,
    setToAddress: React.Dispatch<React.SetStateAction<string>>,
    toPhone: string,
    setToPhone: React.Dispatch<React.SetStateAction<string>>,
}

const RootPage: React.FC = () => {
    const menuList: string[] = ['Home', 'Invoices', 'Contact'];
    const [fromName, setFromName] = React.useState("Md Nazmul Hasan");
    const [fromEmail, setFromEmail] = React.useState("hasan08sust@gmail.com");
    const [fromAddress, setFromAddress] = React.useState("West Subid Bazar, Sylhet, Bangladesh");
    const [fromPhone, setFromPhone] = React.useState("+88015555555");
    const [businessNumber, setBusinessNumber] = React.useState("+88016355555");
    const [toFullName, setToFullName] = React.useState("GoUpp Inc.");
    const [toEmail, setToEmail] = React.useState("account@goupp.xyz");
    const [toAddress, setToAddress] = React.useState("East Subid Bazar, Sylhet, Bangladesh");
    const [toPhone, setToPhone] = React.useState("+8801257488888");
    const [invoiceNumber, setInvoiceNumber] = React.useState("INV001");

    const invoiceData: InvoiceData = { fromName, setFromName, fromEmail, setFromEmail, fromAddress, setFromAddress, fromPhone, setFromPhone, businessNumber, setBusinessNumber, invoiceNumber, setInvoiceNumber, toFullName, setToFullName, toEmail, setToEmail, toAddress, setToAddress, toPhone, setToPhone };

    return (
        <Layout className="layout">
            <HeaderMenu menuList={menuList} />

            <Content style={{ padding: '0 50px' }}>
                <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item>Home</Breadcrumb.Item>
                    <Breadcrumb.Item>List</Breadcrumb.Item>
                    <Breadcrumb.Item>App</Breadcrumb.Item>
                </Breadcrumb>
                <Row gutter={32}>
                    <Col span={12} className="gutter-row">
                        <InvoiceLayout invoiceData={invoiceData} />
                    </Col>
                    <Col span={12} className="gutter-row">
                        <InvoicePreview invoiceData={invoiceData} />
                    </Col>
                </Row>
            </Content>

            <Footer style={{ textAlign: 'center' }}>Invoice App ©2022 Created by GoUpp</Footer>
        </Layout>
    )
}

export default RootPage;