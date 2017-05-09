/**
 * 顶部常用网址
 * Created by xinchao.dou on 2017/5/3.
 */
const types = {
    KEY: 'SITES', // 保存到本地的key
    SET_SITES: 'SET_SITES',
    ADD_SITES: 'ADD_SITES', // 添加网址
    DELETE_SITE: 'DELETE_SITE' // 删除网址
};
/**
 * 保存state到本地
 * @param sites
 * @private
 */
function _saveToLocal(sites) {
    // 将最新state保存到本地
    window.localStorage.setItem(types.KEY, JSON.stringify(sites));
}
export default {
    state: {
        sites: []
    },
    actions: {
        // 初始化从本地加载网址信息
        getSites({commit}) {
            commit(types.SET_SITES);
        },
        // 添加网址
        addSites({commit}, site = {title: '', url: ''}) {
            return new Promise((resolve, reject) => {
                commit(types.ADD_SITES, site);
                resolve();
            });
        },
        // 删除网址
        deleteSite({commit}, id) {
            return new Promise((resolve) => {
                commit(types.DELETE_SITE, id);
                resolve();
            });
        }
    },
    getters: {
        // 对本地网址进行处理
        sites(state) {
            return state.sites;
        }
    },
    mutations: {
        // 从本地存储中读取网址并初始化
        [types.SET_SITES] (state) {
            state.sites = JSON.parse(window.localStorage.getItem(types.KEY)) || [];
        },
        // 添加网址
        [types.ADD_SITES](state, site) {
            site.id = new Date().valueOf();
            state.sites.unshift(site);
            _saveToLocal(state.sites);
        },
        // 删除网址
        [types.DELETE_SITE](state, id) {
            state.sites = state.sites.filter(site => {
                return site.id.toString() !== id;
            });
            _saveToLocal(state.sites);
        }
    }
}