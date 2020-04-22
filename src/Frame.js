import React, { Component } from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import { Link } from 'react-router-dom';
import {
	UserOutlined,
	LaptopOutlined,
	NotificationOutlined,
	HomeOutlined,
} from '@ant-design/icons';
import { subRouter } from './routes';

//const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

export default class Frame extends Component {
	constructor() {
		super();
		this.state = {
			selected: 'dashboard',
		};
	}

	render() {
		const { dashboard, article, setting } = subRouter;
		const { selected } = this.state;
		return (
			<Layout>
				<Header className='header'>
					<div className='logo'>
						<h2 style={{ color: '#FFF' }}>F&G</h2>
					</div>
				</Header>
				<Layout>
					<Sider width={200} className='site-layout-background'>
						<Menu
							mode='inline'
							selectedKeys={selected}
							style={{ height: '100%', borderRight: 0 }}>
							<Menu.Item
								key='dashboard'
								onClick={() => this.setState({ selected: 'dashboard' })}>
								<Link to={dashboard.pathName}>
									<UserOutlined />
									Dashboard
								</Link>
							</Menu.Item>
							<Menu.Item
								key='setting'
								onClick={() => this.setState({ selected: 'setting' })}>
								<Link to={setting.pathName}>
									<LaptopOutlined />
									Setting
								</Link>
							</Menu.Item>
							<Menu.Item
								key='article'
								onClick={() => this.setState({ selected: 'article' })}>
								<Link to={article.pathName}>
									<NotificationOutlined />
									Article
								</Link>
							</Menu.Item>
						</Menu>
					</Sider>
					<Layout style={{ padding: '0 24px 24px' }}>
						<Breadcrumb style={{ margin: '16px 0' }}>
							<Breadcrumb.Item
								onClick={() => this.setState({ selected: 'dashboard' })}>
								<Link to={dashboard.pathName}>
									<HomeOutlined />
								</Link>
							</Breadcrumb.Item>
						</Breadcrumb>
						<Content
							className='site-layout-background'
							style={{
								padding: 24,
								margin: 0,
								height: '100%',
							}}>
							{this.props.children}
						</Content>
					</Layout>
				</Layout>
			</Layout>
		);
	}
}
