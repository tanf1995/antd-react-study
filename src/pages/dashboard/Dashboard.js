import TotalData from './components/TotalData';
import styles from './Dashboard.css';
import TestG2 from './components/testG2';


class Dashboard extends React.Component{
    render(){
        return (
            <div className={styles.dashboard}>
                <TotalData />

                <TestG2 />
            </div>
        )
    }
}


export default Dashboard;