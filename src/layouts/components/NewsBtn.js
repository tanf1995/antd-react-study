import {  List, Button, Spin, Popover, Icon, Badge } from 'antd';
import { connect } from 'dva';
import styles from './LayoutHeader.css';


const namespace = 'news';

const mapStateToProps = (state) => {
    const newsList = state[namespace].news_list;
    return {
        newsList,
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        initNews: () => {
            return dispatch({
                type: `${namespace}/queryInitList`
            })
        },
        clearNews: () => {
            return dispatch({
                type: `${namespace}/clearList`
            })
        }
    };
};

@connect(mapStateToProps, mapDispatchToProps)
class NewsBtn extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            news_loading: false
        }
    }

    init_news = (visible) => {
        if(visible){
            this.setState({
                news_loading: true
            })
            this.props.initNews()
                .then(res => {
                    if(res){
                        console.log("获取news失败！")
                    }
                })
                .finally(( ) => {
                    this.setState({
                        news_loading: false
                    })
                })
        }
    }

    clear_news = () => {
        this.setState({
            news_loading: true
        });
        this.props.clearNews()
            .then(res => {
                if(res){
                    console.log("清空消息失败");
                }
            })
            .finally(() => {
                this.setState({
                    news_loading: false
                })
            })
    }

    render(){
        const news_list = (
            <Spin spinning={this.state.news_loading}>
                <List
                    className={styles.news_content}
                    size="small"
                    dataSource={this.props.newsList}
                    renderItem={item => (
                        <List.Item>
                            <div>
                                <p>{item.content}</p>
                                <span className={styles.news_time}>{item.time}</span>
                            </div>
                        </List.Item>
                    )}
                />
                <Button 
                    block 
                    style={{marginTop: '30px'}}
                    onClick={this.clear_news}
                >
                    清空
                </Button>
            </Spin>
        )

        return (
            <>
                <Popover 
                    placement="bottomRight" 
                    content={news_list} 
                    trigger="click"
                    onVisibleChange={this.init_news}
                >
                    <div className={styles.news}>
                        <Badge dot={true}>
                            <Icon type="bell" theme="filled" className={styles.bell} />
                        </Badge>
                    </div>
                </Popover>
            </>
        )
    }
}

export default NewsBtn;