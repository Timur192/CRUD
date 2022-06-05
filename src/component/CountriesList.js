import React from 'react';
import { Table, Space, Button, Modal } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';

const { confirm } = Modal;

const showDeleteConfirm = () => {
    confirm({
        title: 'Delete ',
        icon: <ExclamationCircleOutlined />,
        content: 'Are you sure you want to delete ?',
        okText: 'Yes',
        okType: 'danger',
        cancelText: 'No',

        onOk() {
            console.log('OK');
        },

        onCancel() {
            console.log('Cancel');
        },
    });
};

const columns = [
    {
        title: 'Code',
        dataIndex: 'code'
    },
    {
        title: 'UZ',
        dataIndex: 'nameUz'
    },
    {
        title: 'RU',
        dataIndex: 'nameRu'
    },
    {
        title: 'En',
        dataIndex: 'nameEn'
    },
    {
        title: 'Action',
        key: 'action',
        render: (_, record) => (
            <Space size="middle">
                <Button onClick={showDeleteConfirm} type="primary" danger>
                    Delete
                </Button>
                <Button type="primary">Edit</Button>
            </Space>
        ),
    },
];

const CountriesList = (props) => {
    if (props.countries !== undefined || props.countries !== null) {
        props.countries.forEach(i => i.key = i._id);
    }
    return <Table columns={columns} dataSource={props.countries} />;
}


export default CountriesList;