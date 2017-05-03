/**
 * 常用地址
 * Created by xinchao.dou on 2017/5/3.
 */
import '../styles/popwebsites.css';
import {mapActions, mapGetters} from 'vuex';
export default {
    name: 'popWebsites',
    computed: {
        ...mapGetters(['sites'])
    },
    methods: {
        ...mapActions(['getSites'])
    },
    render(h) {
        const _this = this;
        return <div class="website">
            {
                _this.sites.map(site => {
                    return <a href={`${site.url}`} class="website__item">{site.title}</a>;
                })
            }
        </div>;
    },
    mounted(){
        this.getSites();
    }
}
