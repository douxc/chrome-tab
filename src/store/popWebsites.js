/**
 * 网站
 * Created by xinchao.dou on 2017/5/3.
 */
const types = {
    SET_SITES: 'SET_SITES'
};

export default {
    state: {
        sites: []
    },
    actions: {
        getSites({commit}) {
            commit(types.SET_SITES, [
                {title: '必应', url: 'http://cn.bing.com'},
                {title: '百度', url: 'http://www.baidu.com'},
                {title: '', url: ''}
            ]);
        }
    },
    getters: {
        sites(state) {
            return state.sites;
        }
    },
    mutations: {
        [types.SET_SITES](state, sites = []) {
            state.sites = sites;
        }
    }
}