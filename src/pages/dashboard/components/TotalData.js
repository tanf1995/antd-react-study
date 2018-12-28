import { Row, Col, Card, Divider, Icon, Tooltip } from 'antd';
import styles from './TotalData.css';


const {Meta} = Card;

class TotalData extends React.Component{
    desc = (title) => {
        return (
            <div>
                {title}
                <Tooltip placement="top" title={"指标"}>
                    <Icon type="info-circle" style={{float: 'right', cursor: "pointer"}} />
                </Tooltip>
            </div>
        )
    }

    render(){
        return (
            <Row gutter={16} className={styles.total_row}>
                <Col span={6}>
                    <Card 
                        className={styles.total_card}
                    >
                        <Meta
                            description={this.desc("总销售额")}
                        />
                        <p className={styles.total_num}>￥ 126,560</p>
                        <div className={styles.total_detail}>
                            <span>
                                同周比 12% 
                                <Icon type="caret-up" style={{color: 'red'}} />    
                            </span>
                            <span>
                                同日比 11% 
                                <Icon type="caret-down" style={{color: 'green'}} />
                            </span>
                        </div>
                        <Divider style={{margin: "10px 0"}} />
                        <div>日销售额: <span>￥ 12423</span></div>
                    </Card>
                </Col>

                <Col span={6}>
                    <Card 
                        className={styles.total_card}
                    >
                        <Meta
                            description={this.desc("访问量")}
                        />
                        <p className={styles.total_num}>8,846</p>
                        <div className={styles.total_detail}>
                            <span>
                                同周比 12% 
                                <Icon type="caret-up" style={{color: 'red'}} />    
                            </span>
                            <span>
                                同日比 11% 
                                <Icon type="caret-down" style={{color: 'green'}} />
                            </span>
                        </div>
                        <Divider style={{margin: "10px 0"}} />
                        <div>日访问量: <span>1234</span></div>
                    </Card>
                </Col>

                <Col span={6}>
                    <div className={styles.total_box}>col-6</div>
                </Col>

                <Col span={6}>
                    <div className={styles.total_box}>col-6</div>
                </Col>
            </Row>
        )
    }
}

export default TotalData;