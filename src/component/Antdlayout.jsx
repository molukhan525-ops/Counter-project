// import React, { useState } from 'react';
// import {
//     DesktopOutlined,
//     FileOutlined,
//     PieChartOutlined,
//     TeamOutlined,
//     UserOutlined,
// } from '@ant-design/icons';
// import { Breadcrumb, Layout, Menu, theme } from 'antd';
// import Antdcard from './Antdcard';


// const { Header, Content, Footer, Sider } = Layout;

// function getItem(label, key, icon, children) {
//     return {
//         key,
//         icon,
//         children,
//         label,
//     };

// }
// const items = [
//     getItem('Team 1', 'sub1', <TeamOutlined />, [
//         getItem('Muhammad Owais', '1'),
//         getItem('Muhammad Umer', '2'),
//         getItem('Abdul Rehman', '3'),
//     ]),

//     getItem('Team 2', 'sub2', <TeamOutlined />, [
//         getItem('Muhammad Azeem', '4'),
//         getItem('Khizer Zahid', '5'),
//         getItem('Meer Basit', '6'),
//     ]),

//     getItem('Devices', 'sub3', <DesktopOutlined />, [
//         getItem('HP Laptop', '7'),
//         getItem('Dell PC', '8'),
//         getItem('Macbook Pro', '9'),
//         getItem('Lenovo Toucpad', '10'),
//         getItem('Lenovo Thinkpad', '11'),

//     ]),

//     getItem('Files', 'sub4', <FileOutlined />, [
//         getItem('Word', '12'),
//         getItem('Excel', '13'),
//         getItem('VS Code', '14'),
//     ]),

// ];
// const Antdlayout = () => {
//     const [collapsed, setCollapsed] = useState(false);
//     const {
//         token: { colorBgContainer, borderRadiusLG },
//     } = theme.useToken();
//     const currentYear = new Date().getFullYear();
//     return (
//         <Layout style={{ minHeight: '100vh' }}>
//             <Sider collapsible collapsed={collapsed} onCollapse={value => setCollapsed(value)}>
//                 <div className="demo-logo-vertical" />
//                 <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />
//             </Sider>
//             <Layout>
//                 <Header style={{ padding: 0, background: colorBgContainer }} />
//                 <Content style={{ margin: '0 16px' }}>
//                     <div
//                         style={{
//                             padding: 24,
//                             minHeight: 360,
//                             background: colorBgContainer,
//                             borderRadius: borderRadiusLG,
//                         }}
//                     >

//                         <Antdcard />
//                     </div>
//                 </Content>
//                 <Footer style={{ textAlign: 'center' }}>
//                     Ant Design ©{currentYear} Created by Ant UED
//                 </Footer>
//             </Layout>
//         </Layout>
//     );
// };
// export default Antdlayout;