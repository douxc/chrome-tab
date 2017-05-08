/**
 * 常用地址
 * Created by xinchao.dou on 2017/5/3.
 */
import '../../styles/popwebsites.css';
import {mapActions, mapGetters} from 'vuex';

import PopWebsitesAdd from './PopWebsitesAdd'; // 新增
export default {
    name: 'popWebsites',
    computed: {
        ...mapGetters(['sites', 'openDialog'])
    },
    methods: {
        ...mapActions(['getSites'])
    },
    render(h) {
        const _this = this;
        return <div class="website">
            {
                _this.sites.map(site => {
                    // 如果有网址和网站名称信息，则显示跳转，否则显示新增
                    return (site.url.length > 0 && site.title.length > 0) ?
                        <a href={`${site.url}`} class="website__item" title={site.title}>{site.title}</a>
                        : <a id="addWebsite" href="#" class="website__item website__item--add" title="新增">新增</a>;
                })
            }
            <PopWebsitesAdd class=""/>
        </div>;
    },
    mounted(){
        const _this = this;
        _this.getSites().then(function () {
            // 添加点击事件
            _this.sites.length <= 0 && document.getElementById('addWebsite').addEventListener('click', function () {

            });
        });
    }
}
