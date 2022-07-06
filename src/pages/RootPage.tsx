import React, { useState, useEffect } from "react";
import { Layout, Col, Row, Button } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';
import type { SizeType } from 'antd/es/config-provider/SizeContext';
import HeaderMenu from "../components/HeaderMenu";
import InvoiceLayout from "../components/InvoiceLayout";
import InvoicePreview from "../components/InvoicePreview";

const { Content, Footer } = Layout;

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
    const [isDesktop, setDesktop] = useState(window.innerWidth >= 1024);
    const [showPreview, setShowPreview] = useState(window.innerWidth >= 1024);

    const updateMedia = () => {
        setDesktop(window.innerWidth >= 1024);
        setShowPreview(Boolean(window.innerWidth >= 1024));
    };

    useEffect(() => {
        window.addEventListener("resize", updateMedia);
        return () => window.removeEventListener("resize", updateMedia);
    });

    const invoiceData: InvoiceData = { fromName, setFromName, fromEmail, setFromEmail, fromAddress, setFromAddress, fromPhone, setFromPhone, businessNumber, setBusinessNumber, invoiceNumber, setInvoiceNumber, toFullName, setToFullName, toEmail, setToEmail, toAddress, setToAddress, toPhone, setToPhone };

    const handleShowPreview = (flag: boolean) => {
        setShowPreview(flag);
    }

    const handleDownload = () => {
        alert("Comming soon!");
    }

    const renderLayout = () => {
        return (
            <Col xl={12} lg={12} md={24} sm={24} xs={24} className="gutter-row">
                <InvoiceLayout invoiceData={invoiceData} />
            </Col>
        )
    }

    const renderPreview = () => {
        return (
            <Col xl={12} lg={12} md={24} sm={24} xs={24} className="gutter-row">
                <InvoicePreview invoiceData={invoiceData} />
            </Col>
        )
    }

    const renderLeftForm = () => {
        if (isDesktop) {
            return renderLayout()
        }

        return !showPreview ? renderLayout() : null;
    }

    const renderRightForm = () => {
        if (isDesktop) {
            return renderPreview()
        }

        return showPreview ? renderPreview() : null;
    }

    return (
        <Layout className="layout">
            <HeaderMenu menuList={menuList} />

            <Content style={{ padding: '0 50px' }}>

                <Content style={{ marginTop: '20px' }}>
                    {!isDesktop &&
                        <>
                            <Button type="primary" onClick={() => handleShowPreview(true)}>
                                Preview
                            </Button>
                            <Button type="primary" style={{ marginLeft: '10px' }} onClick={() => handleShowPreview(false)}>
                                Edit
                            </Button>
                        </>
                    }
                    <Button type="primary" style={{ marginLeft: '10px' }} onClick={() => handleDownload()} icon={<DownloadOutlined />} size={"middle"}>
                        Download
                    </Button>
                </Content>
                <Row gutter={32} style={{ marginTop: '20px' }}>
                    {renderLeftForm()}
                    {renderRightForm()}
                </Row>
            </Content>

            <Footer style={{ textAlign: 'center' }}>Invoice App ©2022 Created by GoUpp</Footer>
        </Layout>
    )
}

export default RootPage;