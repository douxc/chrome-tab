/**
 * 新增网址按钮
 * Created by xinchao.dou on 2017/5/8.
 */
import '../../styles/popwebsites.css';
import {mapActions} from 'vuex';

import Dialog from '../common/Dialog'; // Dialog
export default {
    name: 'PopWebsitesAdd',
    render(h) {
        const _this = this;
        return <Dialog>
            <p class="add__header">新增</p>
            <form class="add__form">
                <fieldset>
                    <div class="add__group">
                        <label>名称：</label>
                        <input class="add__input" type="text" placeholder="名称"
                               value={_this.site.title} onInput={(e) => {
                            _this.site.title = e.target.value;
                        }}/>
                    </div>
                    <div class="add__group">
                        <label>网址：</label>
                        <input class="add__input" type="url" name="url"
                               placeholder="网址" value={_this.site.url}
                               onInput={(e) => {
                                   _this.site.url = e.target.value;
                               }}/>
                    </div>
                    <div key="err" class="add_group">
                        {_this.errMsg}
                    </div>
                    <div class="add__btn_group">
                        <button id="submit" type="button" class="add__btn add__btn--confirm">确认</button>
                        <button id="cancel" type="button" class="add__btn">取消</button>
                    </div>
                </fieldset>
            </form>
        </Dialog>;
    },
    props: ['toggleDialog'],
    methods: {
        ...mapActions(['addSites']),
        submit() {
            const _this = this;
            if (_this.site.title.length <= 0) {
                _this.errMsg = '请输入名称';
                return false;
            }
            if (!/((http|ftp|https):\/\/)(([a-zA-Z0-9\._-]+\.[a-zA-Z]{2,6})|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,4})*(\/[a-zA-Z0-9\&%_\./-~-]*)?/.test(_this.site.url)) {
                _this.errMsg = '网址不合法';
                return false;
            }
            _this.errMsg = '';// 没有错误
            _this.addSites(_this.site).then(() => {
                _this.toggleDialog();
            });
        }
    },
    data() {
        return {
            site: {
                title: '',
                url: ''
            },
            errMsg: ''
        };
    },
    mounted() {
        const _this = this;
        document.getElementById('cancel').addEventListener('click', function () {
            _this.toggleDialog();
        });
        document.getElementById('submit').addEventListener('click', function () {
            _this.submit();
        });
    }
}
