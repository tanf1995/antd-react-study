import { Icon, Row, Col, Menu, Dropdown } from 'antd';
import styles from './LayoutHeader.css'
import NewsBtn from './NewsBtn';


class LayoutHeader extends React.Component{
    constructor(props){
        super(props);
        this.lang_menu = (
            <Menu className={styles.lang_menu}>
                <Menu.Item key="0">
                    <span>中文</span>
                </Menu.Item>
                <Menu.Item key="1">
                    <span>English</span>
                </Menu.Item>
            </Menu>
        );
        this.profile_menu = (
            <Menu>
                <Menu.Item key="0">
                    <span>退出登录</span>
                </Menu.Item>
            </Menu>
        );
    }

    toggle = () => {
        this.props.toggle(!this.props.isCollapsed);
    }

    render(){
        return (
            <div className={styles.layoutHeader}>
                <Row type='flex' justify="space-between">
                    <Col className={styles.trigger} onClick={this.toggle}>
                        <Icon
                            type={this.props.isCollapsed ? 'menu-unfold' : 'menu-fold'}
                        />
                    </Col>

                    <Col>
                        <Row type='flex' className={styles.btns}>
                            <NewsBtn />

                            <Dropdown overlay={this.lang_menu}>
                                <div className={styles.lang}>
                                    <Icon type="global" />
                                </div>
                            </Dropdown>

                            <Dropdown overlay={this.profile_menu}>
                                <div className={styles.profile}>
                                    welcome, {'guest'}
                                    <img src={require("../../assets/avatar.jpg")} />
                                </div>
                            </Dropdown>
                        </Row>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default LayoutHeader;