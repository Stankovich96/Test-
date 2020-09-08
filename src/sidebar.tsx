import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter, useLocation } from 'react-router-dom';

import { Menu } from 'antd';

import { HomeOutlined, ShoppingCartOutlined } from '@ant-design/icons';

const { Item } = Menu;

const SideBar: React.FC = (): JSX.Element => {
	const { pathname } = useLocation();
	const selectedKeys = pathname === '/' ? ['/'] : [pathname];

	const MENU_ITEMS = [
		{
			href: '/',
			icon: <HomeOutlined />,
			key: 'Order',
		},
		{
			href: '/other',
			icon: <ShoppingCartOutlined />,
			key: 'Other',
		},
	];

	return (
		<Menu selectedKeys={selectedKeys} mode='inline' theme='light'>
			{MENU_ITEMS.map((item) => {
				const { href, icon, key } = item;
				return (
					<Item key={href}>
						<Link to={href}>
							{icon}
							<span>{key}</span>
						</Link>
					</Item>
				);
			})}
		</Menu>
	);
};

export default withRouter(SideBar);
