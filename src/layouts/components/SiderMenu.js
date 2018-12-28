import { Menu, Icon } from 'antd';
import Link from 'umi/link';
import routeList from '../../../config/routes';


const SubMenu = Menu.SubMenu;

class SiderMenu extends React.Component{
    create_menu(route){
        if(!route.routes){
            return (
                <Menu.Item key={route.path}>
                    <Link to={route.path}>
                        <Icon type={route.icon} />
                        <span>{route.title}</span>
                    </Link>
                </Menu.Item>
            )
        }else{
            return (
                <SubMenu 
                    key={route.path} 
                    title={
                        <span>
                            <Icon type={route.icon} />
                            <span>{route.title}</span>
                        </span>
                    }>
                    {route.routes.map(item => {
                        return this.create_menu(item);
                    })}
                </SubMenu>
            )
        }
    }

    render(){
        let current_path = location.pathname;
        let open_sub = "/" + location.pathname.split('/')[1];

        return (
            <>
                <Menu 
                    theme="dark" 
                    mode="inline" 
                    defaultSelectedKeys={[current_path]}
                    selectedKeys={[current_path]}
                    defaultOpenKeys={[open_sub]}
                >
                    { routeList[0].routes.map( item => {
                        return item.isShow ? this.create_menu(item) : ""
                    } ) }
                </Menu>
            </>
        )
    }
}


export default SiderMenu;