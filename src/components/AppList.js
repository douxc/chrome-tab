/**
 * 已装应用列表
 * Created by xinchao.dou on 2017/5/11.
 */
import {mapActions, mapGetters} from 'vuex';
export default {
    name: 'AppList',
    render(h) {
        const _this = this;
        return <div>
            {_this.apps.map(app => {
                return <p>{app.name}</p>
            })}
        </div>;
    },
    computed: {
        ...mapGetters(['apps'])
    },
    methods: {
        ...mapActions(['getAppList'])
    },
    mounted() {
        this.getAppList();
    }
}