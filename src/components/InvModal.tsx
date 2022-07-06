import React from "react";
import { Modal } from 'antd';

interface InvoiceModalProps {
    title: string,
    isModalVisible: boolean,
    handleCancel: () => void,
    children?: React.ReactNode,
}

const InvoiceModal: React.FC<InvoiceModalProps> = (props) => {
    const { title, isModalVisible, handleCancel, children } = props;
    return (
        <Modal title={title} visible={isModalVisible} onOk={() => { }} onCancel={handleCancel}>
            {children}
        </Modal>
    )
}

export default InvoiceModal;
