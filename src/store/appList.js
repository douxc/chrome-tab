/**
 * 已装应用列表
 * Created by xinchao.dou on 2017/5/11.
 */
const types = {
    GET_APPS: 'GET_APPS'
};
export default {
    state: {
        apps: []
    },
    getters: {
        apps(state){
            return state.apps;
        }
    },
    actions: {
        getAppList({commit}) {
            return new Promise((resolve) => {
                chrome.management.getAll(list => {
                    commit(types.GET_APPS, list.filter(app => {
                        return app.isApp;
                    }));
                    resolve();
                });
            });
        }
    },
    mutations: {
        [types.GET_APPS](state, apps) {
            state.apps = apps;
        }
    }
}