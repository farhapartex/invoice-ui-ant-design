import React from "react";
import { Modal } from 'antd';

interface InvoiceModalProps {
    title: string,
    isModalVisible: boolean,
    handleCancel: () => void,
    children?: React.ReactNode,
    submitHanlder?: () => void,
}

const InvoiceModal: React.FC<InvoiceModalProps> = (props) => {
    const { title, isModalVisible, handleCancel, children, submitHanlder } = props;
    return (
        <Modal title={title} visible={isModalVisible} onOk={submitHanlder} onCancel={handleCancel} footer={[]}>
            {children}
        </Modal>
    )
}

export default InvoiceModal;
