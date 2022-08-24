import { Card, Row, Space, Table } from 'antd';
import { Content } from 'antd/lib/layout/layout';
import React from 'react';
const columns = [
  {
    title: 'First Name',
    dataIndex: 'firstname',
    key: 'firstname',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Last Name',
    dataIndex: 'lastname',
    key: 'lastname',
  },
  {
    title: 'Email',
    dataIndex: 'email',
    key: 'email',
  },
  {
    title: 'Action',
    key: 'action',
    render: (_, record) => (
      <Space size='middle'>
        <a>Edit</a>
        <a>Delete</a>
      </Space>
    ),
  },
];
const data = [
  {
    key: '1',
    firstname: 'John',
    lastname: 'Brown',
    email: 'john@gmail.com',
  },
  {
    key: '2',
    firstname: 'Jim',
    lastname: 'Green',
    email: 'jim@gmail.com',
  },
  {
    key: '3',
    firstname: 'Joe',
    lastname: 'Black',
    email: 'joe@gmail.com',
  },
];

const Users = () => {
  return (
    <Content>
      <Card>
        <h2> Users </h2>

        <Table columns={columns} dataSource={data} />
      </Card>
    </Content>
  );
};

export default Users;
