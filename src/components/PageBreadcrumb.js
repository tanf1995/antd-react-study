import { Breadcrumb, Icon } from 'antd';
import Link from 'umi/link';


class PageBreadcrumb extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            breadcrumbs: []
        }
    }

    componentWillReceiveProps(){
        var path_li = location.pathname.split("/").slice(1);
        var routes = this.props.routes;
        var breadcrumb_li = location.pathname === '/dashboard' ? [] : [{
            path: '/dashboard',
            title: "dashboard",
            component: './dashboard/Dashboard',
            icon: 'dashboard',
        }];
        var path = "";
        path_li.forEach(item => {
            path += "/" + item;
            let route = routes.filter(item => {
                if(item.path){
                    return item.path === path;
                }
            });
            routes = route[0].routes;
            breadcrumb_li.push(route[0]);
        })
        if(this.state.breadcrumbs){
            this.setState({
                breadcrumbs: breadcrumb_li
            })
        }
        document.title = "antd - " + breadcrumb_li[breadcrumb_li.length-1].title;
    }

    render(){
        return (
            <Breadcrumb>
                {this.state.breadcrumbs.map(item => {
                    return (
                        <Breadcrumb.Item
                            key={item.path}
                        >
                            {item.component ? (
                                <Link to={item.component ? item.path : ""}>
                                    <Icon type={item.icon} />
                                    <span>{item.title}</span>
                                </Link>
                            ) : (
                                <>
                                    <Icon type={item.icon} />
                                    <span>{item.title}</span>
                                </>
                            )}
                            
                        </Breadcrumb.Item>
                    )
                })}
            </Breadcrumb>
        )
    }
}

export default PageBreadcrumb;