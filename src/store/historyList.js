/**
 * Created by xinchao.dou on 2017/5/3.
 */
const types = {
    GET_HISTORY: 'GET_HISTORY',
    TOTAL_COUNT: 'TOTAL_COUNT',
};
export default {
    state: {
        history: [],
        totalCount: 0
    },
    actions: {
        getHistory({commit}) {
            return new Promise((resolve, reject) => {
                try {
                    chrome.history.search({text: '', maxResults: 30}, function (results) {
                        commit(types.GET_HISTORY, results);
                        resolve();
                    });
                } catch (e) {
                    commit(types.GET_HISTORY, []);
                    reject(e);
                }
            });
        },
        deleteHistory({commit}, url) {
            return new Promise((resolve, reject) => {
                chrome.history.deleteUrl({url});
                resolve();
            });
        },
        deleteAll({commit}) {
            return new Promise((resolve) => {
                chrome.history.deleteAll(() => {
                    resolve();
                });
            });
        },
        getHistoryCount({commit}) {
            return new Promise((resolve, reject) => {
                chrome.history.search({text: '', maxResults: 5001}, function (results) {
                    commit(types.TOTAL_COUNT, results.length);
                    resolve();
                });
            });
        }
    },
    getters: {
        history(state) {
            return state.history;
        },
        countStr(state) {
            return (state.totalCount > 5000 ? '大于5000条' : `共${state.totalCount}条`) + `，当前显示${state.history.length}条`;
        }
    },
    mutations: {
        [types.GET_HISTORY](state, history = []) {
            state.history = history;
        },
        [types.TOTAL_COUNT](state, count = 0) {
            state.totalCount = count;
        }
    }
}