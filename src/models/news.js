import axios from 'axios';

export default {
    namespace: 'news',
    state: {
        news_list: []
    },
    reducers: {
        init_news(state, {payload: _news_list}){
            return {
                news_list: _news_list
            }
        },
        clear_news(state){
            return {
                news_list: []
            }
        }
    },
    effects: {
        *queryInitList(_, {call, put}){
            const url = '/api/news';
            const res = yield call(axios.get, url);
            
            let res_data = res.data;
            if(res.status === 200 && res_data.errcode === 0){
                yield put({type: 'init_news', payload: res_data.data});
            }else{
                yield put({type: 'clear_news'});
                return res;
            }
        },
        *clearList(_, {call, put}){
            const url = '/api/news';
            const res = yield call(axios.delete, url);

            let res_data = res.data;
            if(res.status === 200 && res_data.errcode === 0){
                yield put({type: 'clear_news'});
            }else{
                return res;
            }
        }
    }
}