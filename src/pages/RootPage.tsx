import React, { useState, useEffect } from "react";
import { Layout, Col, Row, Button } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';
import HeaderMenu from "../components/HeaderMenu";
import InvoiceLayout from "../components/InvoiceLayout";
import InvoicePreview from "../components/InvoicePreview";
// import { supabase } from "../supabaseClient";
import { Invoice, InvoiceCalculationData, InvoiceData, InvoiceTableData } from "../components/interface";

const { Content, Footer } = Layout;

const RootPage: React.FC = () => {
    const menuList: string[] = ['Home', 'Invoices'];
    const [fromName, setFromName] = React.useState("");
    const [fromEmail, setFromEmail] = React.useState("");
    const [fromAddress, setFromAddress] = React.useState("");
    const [fromPhone, setFromPhone] = React.useState("");
    const [businessNumber, setBusinessNumber] = React.useState("");
    const [toFullName, setToFullName] = React.useState("");
    const [toEmail, setToEmail] = React.useState("");
    const [toAddress, setToAddress] = React.useState("");
    const [toPhone, setToPhone] = React.useState("");
    const [invoiceNumber, setInvoiceNumber] = React.useState("");
    const [isDesktop, setDesktop] = useState(window.innerWidth >= 1024);
    const [showPreview, setShowPreview] = useState(window.innerWidth >= 1024);
    const [invoiceTableData, setInvoiceTabledata] = useState<InvoiceTableData[]>([]);
    const [subTotal, setSubTotal] = useState<number>(0);
    const [taxPercent, setTaxPercent] = useState<number>(5);
    const [taxAmount, setTaxAmount] = useState<number>(0);
    const [total, setTotal] = useState<number>(0);
    const [date, setDate] = useState<Date>(new Date());

    const updateMedia = () => {
        setDesktop(window.innerWidth >= 1024);
        setShowPreview(Boolean(window.innerWidth >= 1024));
    };

    const data: Invoice = {
        id: '629eede9-5738-4fc7-b51c-9b19d0669fc8',
        invoiceno: 'INV001',
        fromname: 'Md Nazmul Hasan',
        fromemail: 'hasan08sust@gmail.com',
        fromaddress: 'Test address',
        fromphone: '+89766513',
        frombusinessnumber: '+8798631',
        toname: 'GoUpp Inc.',
        toemail: 'account@goupp.xyz',
        toaddress: 'Test address',
        tophone: '+89766513',
    }

    // const fetchInvoiceData = async () => {
    //     const response = await supabase
    //         .from<Invoice>('invoices') // Message maps to the type of the row in your database.
    //         .select("*");
    //     console.log(response);
    // }

    // const createInvoiceData = async (data: Invoice) => {
    //     const response = await supabase
    //         .from<Invoice>('invoices') // Message maps to the type of the row in your database.
    //         .insert([data]);
    //     console.log(response);
    // }

    //fetchInvoiceData();
    //createInvoiceData(data);

    useEffect(() => {
        window.addEventListener("resize", updateMedia);
        return () => window.removeEventListener("resize", updateMedia);

    });

    const invoiceData: InvoiceData = { fromName, setFromName, fromEmail, setFromEmail, fromAddress, setFromAddress, fromPhone, setFromPhone, businessNumber, setBusinessNumber, invoiceNumber, setInvoiceNumber, toFullName, setToFullName, toEmail, setToEmail, toAddress, setToAddress, toPhone, setToPhone, invoiceTableData, setInvoiceTabledata, taxPercent, setTaxPercent, date, setDate };

    const handleShowPreview = (flag: boolean) => {
        setShowPreview(flag);
    }

    const handleDownload = () => {
        alert("Comming soon!");
    }

    const getInvoiceCalculations = (): InvoiceCalculationData => {
        return { subTotal, setSubTotal, taxPercent, setTaxPercent, taxAmount, setTaxAmount, total, setTotal };
    }

    const renderLayout = () => {
        return (
            <Col xl={12} lg={12} md={24} sm={24} xs={24} className="gutter-row">
                <InvoiceLayout invoiceData={invoiceData} calculationData={getInvoiceCalculations()} />
            </Col>
        )
    }

    const renderPreview = () => {
        return (
            <Col xl={12} lg={12} md={24} sm={24} xs={24} className="gutter-row">
                <InvoicePreview invoiceData={invoiceData} calculationData={getInvoiceCalculations()} />
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
                    <Button type="primary" onClick={() => handleDownload()} icon={<DownloadOutlined />} size={"middle"}>
                        Download
                    </Button>
                    {!isDesktop &&
                        <>
                            <Button style={{ marginLeft: '10px' }} type="primary" onClick={() => handleShowPreview(true)}>
                                Preview
                            </Button>
                            <Button type="primary" style={{ marginLeft: '10px' }} onClick={() => handleShowPreview(false)}>
                                Edit
                            </Button>
                        </>
                    }

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