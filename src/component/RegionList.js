import React from 'react';
import { Table, Space, Button } from 'antd';

const columns = [
    {
        title: 'Code',
        dataIndex: 'countryCode'
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
                <Button type="primary" danger>
                    Delete
                </Button>
                <Button type="primary">Edit</Button>
            </Space>
        ),
    },
];

const RegionList = (props) => {
    if (props.countries !== undefined || props.countries !== null) {
        props.countries.forEach(i => i.key = i._id);
    }
    return <Table columns={columns} dataSource={props.countries} />;
}


export default RegionList;