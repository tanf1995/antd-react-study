import { Layout } from 'antd';
import styles from './BasicLayout.css'
import SiderMenu from './components/SiderMenu';
import LayoutHeader from './components/LayoutHeader'
import PageBreadcrumb from '../components/PageBreadcrumb';


const { Header, Sider, Content } = Layout;

class BasicLayout extends React.Component {
    state = {
        collapsed: false,
    };

    toggle = (status) => {
        this.setState({
            collapsed: status,
        });
    }

    render() {
        return (
            <Layout className={styles.baseLayout}>
                <Sider
                    trigger={null}
                    collapsible
                    collapsed={this.state.collapsed}
                    className={styles.sider}
                    width="260px"
                    breakpoint="lg"
                    onBreakpoint={(bk) => {this.toggle(bk)}}
                >
                    <div className={styles.logo} />
                    <SiderMenu />
                </Sider>

                <Layout>
                    <Header style={{ background: '#fff', padding: 0 }}>
                        <LayoutHeader 
                            toggle={(status) => this.toggle(status)} 
                            isCollapsed={this.state.collapsed}
                        />
                    </Header>

                    <Content>
                        <div style={{
                            height: "50px",
                            lineHeight: '50px',
                            padding: "10px 12px 0"
                        }}>
                            <PageBreadcrumb routes={this.props.route.routes} />
                        </div>
                        <div style={{
                            margin: ' 0 24px',
                            minHeight: 780,
                        }}>
                            {this.props.children}
                        </div>
                    </Content>
                </Layout>
            </Layout>
        );
    }
}

export default BasicLayout;