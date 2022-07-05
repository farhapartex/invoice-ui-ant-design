import React from "react";
import { Breadcrumb, Layout, Col, Row } from 'antd';
import HeaderMenu from "../components/HeaderMenu";
import InvoiceLayout from "../components/InvoiceLayout";
import InvoicePreview from "../components/InvoicePreview";

const { Header, Content, Footer } = Layout;

const RootPage: React.FC = () => {
    const menuList: string[] = ['Home', 'Invoices', 'Contact'];

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
                        <InvoiceLayout />
                    </Col>
                    <Col span={12} className="gutter-row">
                        <InvoicePreview />
                    </Col>
                </Row>
            </Content>

            <Footer style={{ textAlign: 'center' }}>Invoice App ©2022 Created by GoUpp</Footer>
        </Layout>
    )
}

export default RootPage;