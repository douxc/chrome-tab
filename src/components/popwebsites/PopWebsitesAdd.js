/**
 * 新增网址按钮
 * Created by xinchao.dou on 2017/5/8.
 */
import '../../styles/popwebsites.css';
import {mapActions} from 'vuex';

import Dialog from '../common/Dialog'; // Dialog
export default {
    name: 'PopWebsitesAdd',
    methods: {
        ...mapActions(['addSites'])
    },
    render(h) {
        return <Dialog>
            <p class="add__header">新增</p>
            <form class="add__form">
                <fieldset>
                    <div class="add__group">
                        <label>名称：</label>
                        <input class="add__input" type="text" minLength="1" placeholder="名称" title="请输入网站名称"/>
                    </div>
                    <div class="add__group">
                        <label>网址：</label>
                        <input class="add__input" type="url" name="url" minLength="1" placeholder="网址"
                               title="请输入合法的网址"/>
                    </div>
                    <div class="add__btn_group">
                        <button type="submit" class="add__btn add__btn--confirm">确认</button>
                        <button type="button" class="add__btn">取消</button>
                    </div>
                </fieldset>
            </form>
        </Dialog>;
    },
    mounted() {

    }
}
