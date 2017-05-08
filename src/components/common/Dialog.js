/**
 * 弹出窗口
 * Created by xinchao.dou on 2017/5/8.
 */
import './dialog.css';
export default {
    name: 'Dialog',
    render() {
        return <div class="dialog">
            <div class="dialog__content">
                {this.$slots.default}
            </div>
        </div>
    }
}