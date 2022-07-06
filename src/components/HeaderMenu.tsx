import React from "react";
import { Layout, Menu } from 'antd';

const { Header } = Layout;

interface HeaderMenuProps {
    menuList: string[];
}

const HeaderMenu: React.FC<HeaderMenuProps> = (props) => {
    const { menuList } = props;

    return (
        <Header>
            <div className="logo" />
            <Menu
                theme="dark"
                mode="horizontal"
                defaultSelectedKeys={['1']}
                items={menuList.map((item, index) => {
                    const key = index + 1;
                    return {
                        key,
                        label: item,
                    };
                })}
            />
        </Header>
    )
}

export default HeaderMenu;