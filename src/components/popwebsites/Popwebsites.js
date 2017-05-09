/**
 * 常用地址
 * Created by xinchao.dou on 2017/5/3.
 */
import '../../styles/popwebsites.css';
import {mapActions, mapGetters} from 'vuex';

import PopWebsitesAdd from './PopWebsitesAdd'; // 新增
export default {
    name: 'popWebsites',
    render(h) {
        const _this = this;
        return <div class="website">
            {
                _this.sites.map((site, index) => {
                    // 如果有网址和网站名称信息，则显示跳转，否则显示新增
                    return <a key={`item${index}`} href={`${site.url}`} class="website__item"
                              title={site.title}>
                        <span data-id={site.id} class="website__item--delete" title="删除">&times;</span>
                        {site.title}</a>;
                })
            }
            <a key="add" id="addWebsite"
               class={`website__item website__item--add ${_this.sites.length <= 2 ? '' : 'hide'}`} title="新增">新增</a>
            <PopWebsitesAdd toggleDialog={_this.toggleDialog} class={_this.openDialog && 'open'}/>
        </div>;
    },
    computed: {
        ...mapGetters(['sites'])
    },
    methods: {
        ...mapActions(['getSites', 'deleteSite']),
        toggleDialog (){
            this.openDialog = !this.openDialog;
        }
    },
    data() {
        return {
            openDialog: false
        }
    },
    mounted(){
        const _this = this;
        _this.getSites().then(function () {
            // 添加点击事件
            const el = document.getElementById('addWebsite');
            el && el.addEventListener('click', function () {
                _this.toggleDialog();
            });
            // 添加删除功能
            document.querySelectorAll('.website__item > .website__item--delete').forEach(elm => {
                elm.addEventListener('click', function (e) {
                    e.preventDefault();
                    e.stopPropagation();
                    _this.deleteSite(e.target.dataset.id);
                });
            });
        });
    }
}
