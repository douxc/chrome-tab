/**
 * Created by xinchao.dou on 2017/5/3.
 */
const types = {
    GET_HISTORY: 'GET_HISTORY'
};
export default {
    state: {
        history: []
    },
    actions: {
        getHistory({commit}) {
            try {
                chrome.history.search({text: '', maxResults: 30}, function (results) {
                    commit(types.GET_HISTORY, results);
                });
            } catch (e) {
                commit(types.GET_HISTORY, []);
            }
        }
    },
    getters: {
        history(state) {
            return state.history;
        }
    },
    mutations: {
        [types.GET_HISTORY](state, history = []){
            state.history = history;
        }
    }
}