import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'antd/dist/antd.css';
import './App.css';
import { Layout, Menu, Table } from 'antd';

import { PATHS } from './constant';

import SideBar from './sidebar';
import { Order } from './order';
import { Other } from './other';

const { Header, Content, Footer, Sider } = Layout;

const { ORDER, OTHER } = PATHS;
function App() {
	const columns: any = [
		{
			title: 'Name',
			dataIndex: 'name',
			filters: [
				{
					text: 'Joe',
					value: 'Joe',
				},
				{
					text: 'Jim',
					value: 'Jim',
				},
				{
					text: 'Submenu',
					value: 'Submenu',
					children: [
						{
							text: 'Green',
							value: 'Green',
						},
						{
							text: 'Black',
							value: 'Black',
						},
					],
				},
			],
			// specify the condition of filtering result
			// here is that finding the name started with `value`
			onFilter: (value: any, record: any) => record.name.indexOf(value) === 0,
			sorter: (a: any, b: any) => a.name.length - b.name.length,
			sortDirections: ['descend'],
		},
		{
			title: 'Age',
			dataIndex: 'age',
			defaultSortOrder: 'descend',
			sorter: (a: any, b: any) => a.age - b.age,
		},
		{
			title: 'Address',
			dataIndex: 'address',
			filters: [
				{
					text: 'London',
					value: 'London',
				},
				{
					text: 'New York',
					value: 'New York',
				},
			],
			filterMultiple: false,
			onFilter: (value: any, record: any) =>
				record.address.indexOf(value) === 0,
			sorter: (a: any, b: any) => a.address.length - b.address.length,
			sortDirections: ['descend', 'ascend'],
		},
	];

	const data = [
		{
			key: '1',
			name: 'John Brown',
			age: 32,
			address: 'New York No. 1 Lake Park',
		},
		{
			key: '2',
			name: 'Jim Green',
			age: 42,
			address: 'London No. 1 Lake Park',
		},
		{
			key: '3',
			name: 'Joe Black',
			age: 32,
			address: 'Sidney No. 1 Lake Park',
		},
		{
			key: '4',
			name: 'Jim Red',
			age: 32,
			address: 'London No. 2 Lake Park',
		},
	];

	function onChange(pagination: any, filters: any, sorter: any, extra: any) {
		console.log('params', pagination, filters, sorter, extra);
	}
	return (
		<Router>
			<Switch>
				<Route>
					<Layout className='app-container'>
						<Sider
							collapsible
							className='app-sider'
							style={{
								overflow: 'hidden',
								height: '100vh',
								position: 'fixed',
								left: 0,
							}}>
							<div className='logo-container'>
								<img alt='company-logo' className='logo' src='./logo.svg' />
							</div>
							<SideBar />
						</Sider>
						<Layout
							style={{
								marginLeft: 200,
							}}>
							<Header />
							<Content className='app-content'>
								<Switch>
									<Route exact path={ORDER} component={Order} />
									<Route exact path={OTHER} component={Other} />
								</Switch>
							</Content>
							<Footer />
						</Layout>
					</Layout>
				</Route>
			</Switch>
		</Router>
	);
}

export default App;
