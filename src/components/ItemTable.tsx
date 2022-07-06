import React, { useState } from 'react';
import { InputNumber, Button, Form, Input, Popconfirm, Table, Typography, message } from 'antd';
import InvoiceModal from './InvModal';
import { InvoiceTableData } from './interface';


const originData: InvoiceTableData[] = [];
for (let i = 0; i < 1; i++) {
    originData.push({
        key: i.toString(),
        description: `Edrward ${i}`,
        rate: 32,
        qty: 3,
        amount: 96,
    });
}


interface EditableCellProps extends React.HTMLAttributes<HTMLElement> {
    editing: boolean;
    dataIndex: string;
    title: any;
    inputType: 'number' | 'text';
    record: InvoiceTableData;
    index: number;
    children: React.ReactNode;
}


const EditableCell: React.FC<EditableCellProps> = ({
    editing,
    dataIndex,
    title,
    inputType,
    record,
    index,
    children,
    ...restProps
}) => {
    const inputNode = inputType === 'number' ? <InputNumber /> : <Input />;

    return (
        <td {...restProps}>
            {editing ? (
                <Form.Item
                    name={dataIndex}
                    style={{ margin: 0 }}
                    rules={[
                        {
                            required: true,
                            message: `Please Input ${title}!`,
                        },
                    ]}
                >
                    {inputNode}
                </Form.Item>
            ) : (
                children
            )}
        </td>
    );
};


interface ItemTableProps {
    items: InvoiceTableData[],
    setItems: React.Dispatch<React.SetStateAction<InvoiceTableData[]>>
}


const Itemtable: React.FC<ItemTableProps> = (props) => {
    const { items, setItems } = props;

    const [form] = Form.useForm();
    const [editingKey, setEditingKey] = useState('');
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [description, setDescription] = useState<string>("");
    const [rate, setRate] = useState<number>(0);
    const [qty, setQty] = useState<number>(0);


    const isEditing = (record: InvoiceTableData) => record.key === editingKey;

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    const edit = (record: Partial<InvoiceTableData> & { key: React.Key }) => {
        form.setFieldsValue({ name: '', age: '', address: '', ...record });
        setEditingKey(record.key);
    };

    const cancel = () => {
        setEditingKey('');
    };

    const addRowHandler = () => {
        console.log("Working man!");
        setIsModalVisible(false);

        const newItem: InvoiceTableData = {
            key: (items.length + 1).toString(),
            description: description,
            rate: rate,
            qty: qty,
            amount: rate * qty,
        }
        setDescription("");
        setRate(0);
        setQty(0);
        setItems([...items, newItem]);
        message.success("Item added successfully!");
    }

    const save = async (key: React.Key) => {
        try {
            const row = (await form.validateFields()) as InvoiceTableData;

            const newData = [...items];
            const index = newData.findIndex(item => key === item.key);
            if (index > -1) {
                const item = newData[index];
                newData.splice(index, 1, {
                    ...item,
                    ...row,
                });
                setItems(newData);
                setEditingKey('');
            } else {
                newData.push(row);
                setItems(newData);
                setEditingKey('');
            }
        } catch (errInfo) {
            console.log('Validate Failed:', errInfo);
        }
    };

    const columns = [
        {
            title: 'Description',
            dataIndex: 'description',
            width: '55%',
            editable: true,
        },
        {
            title: 'Rate',
            dataIndex: 'rate',
            width: '15%',
            editable: true,
        },
        {
            title: 'QTY',
            dataIndex: 'qty',
            width: '15%',
            editable: true,
        },
        {
            title: 'Amount',
            dataIndex: 'amount',
            width: '15%',
            editable: false,
        },
        {
            title: 'operation',
            dataIndex: 'operation',
            render: (_: any, record: InvoiceTableData) => {
                const editable = isEditing(record);
                return editable ? (
                    <span>
                        <Typography.Link onClick={() => save(record.key)} style={{ marginRight: 8 }}>
                            Save
                        </Typography.Link>
                        <Popconfirm title="Sure to cancel?" onConfirm={cancel}>
                            <a>Cancel</a>
                        </Popconfirm>
                    </span>
                ) : (
                    <Typography.Link disabled={editingKey !== ''} onClick={() => edit(record)}>
                        Edit
                    </Typography.Link>
                );
            },
        },
    ];

    const mergedColumns = columns.map(col => {
        if (!col.editable) {
            return col;
        }
        return {
            ...col,
            onCell: (record: InvoiceTableData) => ({
                record,
                inputType: col.dataIndex === 'description' || col.dataIndex === 'amount' ? 'text' : 'number',
                dataIndex: col.dataIndex,
                title: col.title,
                editing: isEditing(record),
            }),
        };
    });

    const formItemLayout = {
        labelCol: {
            xs: { span: 24 },
            sm: { span: 16 },
            md: { span: 8 },
            xl: { span: 6 },
            lg: { span: 8 },
        },
        wrapperCol: {
            xs: { span: 24 },
            sm: { span: 16 },
            md: { span: 16 },
            xl: { span: 16 },
            lg: { span: 16 },
        },
    };


    return (
        <div>
            <Button type="primary" style={{ marginBottom: 16 }} onClick={() => setIsModalVisible(true)}>
                Add a row
            </Button>
            <Form form={form} component={false} >
                <Table
                    components={{
                        body: {
                            cell: EditableCell,
                        },
                    }}
                    bordered
                    dataSource={items}
                    columns={mergedColumns}
                    rowClassName="editable-row"
                    pagination={false}
                />
            </Form>
            <InvoiceModal title="Invoice Item" isModalVisible={isModalVisible} handleCancel={handleCancel} submitHanlder={addRowHandler}>
                <Form {...formItemLayout} layout="horizontal">
                    <Form.Item
                        name={'description'}
                        label="Description"
                        rules={[{ required: true, message: 'Please input description!' }]}
                    >
                        <Input.TextArea placeholder="Ex: Lorem Ipsum " onChange={(e) => setDescription(e.target.value)} value={description} />
                    </Form.Item>
                    <Form.Item
                        name={'rate'}
                        label="Rate"
                        rules={[{ required: true, message: 'Please input rate!' }]}
                    >
                        <Input placeholder="Ex: 20" onChange={(e) => setRate(parseFloat(e.target.value))} value={rate} />
                    </Form.Item>
                    <Form.Item
                        name={'qty'}
                        label="Quantity"
                        rules={[{ required: true, message: 'Please input quantity!' }]}
                    >
                        <Input placeholder="Ex: 320" onChange={(e) => setQty(parseInt(e.target.value))} value={qty} />
                    </Form.Item>
                </Form>
            </InvoiceModal>
        </div >
    )
}


export default Itemtable;