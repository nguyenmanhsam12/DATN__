import React, { useState } from 'react';
import { AppstoreOutlined, LaptopOutlined, NotificationOutlined, TagOutlined, UserOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import { Link, Outlet, useLocation } from 'react-router-dom';

const { Header, Content, Sider } = Layout;

const items2: MenuProps['items'] = [
  {
    key: '1',
    icon: <UserOutlined />,
    label: 'User Management',
    children: [
      { key: '1-1', label: <Link to='list-user'>List User</Link>},
      { key: '1-2', label: <Link to="add-user">Add User</Link> },
      // { key: '1-2', label: <Link to="/dashboard/list">Danh sách sản phẩm</Link> },
      // { key: '1-3', label: 'Cập nhật sản phẩm' },
      // { key: '1-4', label: 'Xóa sản phẩm' },
    ],
  },
  {
    key: '2',
    icon: <LaptopOutlined />,
    label: 'Products',
    children: [
      { key: '2-1', label: <Link to='list-products'>List products</Link> },
      { key: '2-2', label: <Link to='add-products'>Add products</Link> },
    ],
  },
  // {
  //   key: '3',
  //   icon: <NotificationOutlined />,
  //   label: 'example',
  //   children: [
  //     { key: '3-1', label: 'Thông báo 1' },
  //     { key: '3-2', label: 'Thông báo 2' },
  //     { key: '3-3', label: 'Thông báo 3' },
  //     { key: '3-4', label: 'Thông báo 4' },
  //   ],
  // },
  {
    key: '4',
    icon: <TagOutlined />,
    label: 'Coupons Manager',
    children: [
      { key: '4-1', label: <Link to='coupon-list'>List Coupons</Link> },
      { key: '4-2', label: <Link to='coupon-add'>Add Coupons</Link> },
      { key: '4-3', label: <Link to='coupon-edit'>Edit Coupons</Link> },
      { key: '4-4', label:  <Link to='coupon-usagereport'>Usagereport</Link> },
      { key: '4-5', label: <Link to='coupon-statistic'>Statistic</Link> },
    ],
  },
  {
    key: '5',
    icon: <AppstoreOutlined />,
    label: 'Categories',
    children: [
      { key: '5-1', label: <Link to='list-categories'>List Categories</Link> },
      { key: '5-2', label: <Link to='add-categories'>Add Category</Link> },
      
    ],
  },
  {
    key: '6',
    icon: <AppstoreOutlined />,
    label: 'Roles',
    children: [
      { key: '6-1', label: <Link to='list-roles'>List Roles</Link> },
      { key: '6-2', label: <Link to='add-roles'>Add Roles</Link> },
      
    ],
  },
  {
    key: '7',
    icon: <AppstoreOutlined />,
    label: 'Sizes',
    children: [
      { key: '7-1', label: <Link to='list-sizes'>List Sizes</Link> },
      { key: '7-2', label: <Link to='add-sizes'>Add Sizes</Link> },
    ],
  },
  {
    key: '8',
    icon: <AppstoreOutlined />,
    label: 'Brand',
    children: [
      { key: '8-1', label: <Link to='list-brands'>List Brands</Link> },
      { key: '8-2', label: <Link to='add-brands'>Add Brand</Link> },
    ],
  },
  {
    key: '9',
    icon: <AppstoreOutlined />,
    label: 'Colors',
    children: [
      { key: '9-1', label: <Link to='list-colors'>List Colors</Link> },
      { key: '9-2', label: <Link to='add-colors'>Add Color</Link> },
    ],
  },
  {
    key: '10',
    icon: <AppstoreOutlined />,
    label: 'Variants',
    children: [
      { key: '10-1', label: <Link to='list-variants'>List Variants</Link> },
      { key: '10-2', label: <Link to='add-variants'>Add Variants</Link> },
    ],
  },
];

const breadcrumbMap: Record<string, string> = {
  '/list-user': 'List User',
  '/edit-user' : 'Edit User',
  '/coupon-list':'Coupons List',
};


const Admin: React.FC = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  
  const location = useLocation(); // Lấy vị trí hiện tại
  const pathname = location.pathname; // Lấy đường dẫn hiện tại
  const pathSnippets = pathname.split('/').filter(i => i); // Tách đường dẫn thành các đoạn

  const breadcrumbItems = [
    <Breadcrumb.Item key="home">
      <Link to="/">Trang chủ</Link>
    </Breadcrumb.Item>,
    ...pathSnippets.map((_, index) => {
      const url = `/${pathSnippets.slice(0, index + 1).join('/')}`;
      return (
        <Breadcrumb.Item key={url}>
          <Link to={url}>{breadcrumbMap[url] || url}</Link>
        </Breadcrumb.Item>
      );
    }),
  ];

  // Trạng thái thu gọn của sidebar
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout>
      <Header style={{ display: 'flex', alignItems: 'center' }}>
          <div className="h-16 flex items-center justify-center text-2xl font-bold text-white" >Admin Dashboard</div>
        <Menu theme="dark" mode="horizontal" style={{ flex: 1, minWidth: 0 }} />
      </Header>
      <Layout>

        <Sider width={250} style={{ background: colorBgContainer }} collapsible collapsed={collapsed} onCollapse={setCollapsed}>
          <Menu mode="inline" defaultSelectedKeys={['1']} defaultOpenKeys={['sub1']} style={{ height: '100%', borderRight: 0 }} items={items2} />
        </Sider>
        <Layout style={{ padding: '0 24px 24px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>

            {pathSnippets.map((path, index) => {
              const url = `/${pathSnippets.slice(0, index + 1).join('/')}`;
              return (
                <Breadcrumb.Item key={url}>
                  <Link to={url}>{path}</Link>
                </Breadcrumb.Item>
              );
            })}
          </Breadcrumb>
          <Content className='h-screen' style={{ padding: 24, margin: 0,  borderRadius: borderRadiusLG }}>
            <Outlet />
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default Admin;
