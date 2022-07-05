import { Space, Table, Tag } from 'antd';
import type { ColumnsType, TablePaginationConfig } from 'antd/lib/table';
import React from 'react';

interface DataTableProps {
    columns: ColumnsType<any>,
    data: any[],
    pagination: TablePaginationConfig | false
}

const DataTable: React.FC<DataTableProps> = (props) => {
    const { columns, data, pagination } = props;

    return <Table columns={columns} dataSource={data} pagination={pagination} />
};

export default DataTable;