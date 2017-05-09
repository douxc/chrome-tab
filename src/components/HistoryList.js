/**
 * 浏览历史
 * Created by xinchao.dou on 2017/5/3.
 */
import '../styles/historyList.css';
import {mapActions, mapGetters} from 'vuex';
export default {
    name: 'HistoryList',
    computed: {
        ...mapGetters(['history', 'countStr'])
    },
    methods: {
        ...mapActions(['getHistory', 'deleteHistory', 'getHistoryCount', 'deleteAll'])
    },
    render(h) {
        const _this = this;
        return _this.history.length > 0 && <div class="history-container">
                <ul class="history">
                    {_this.history.map(history => {
                        return <li class="history_item">
                            <a class="history_item__title text-ellipsis" href={history.url} title={history.title}>
                                {history.title}
                            </a>
                            <a class="history_item__url text-ellipsis" href={history.url} title={history.title}>
                                {history.url}
                            </a>
                            <a title="删除" data-url={history.url} class="history_item__delete">&times;</a>
                        </li>;
                    })}
                </ul>
                <div class="footer">
                    <p class="footer__count">{_this.countStr}</p>
                    <a class="history_item__delete footer__deleteAll" title="deleteAll">&times;</a>
                </div>
            </div>;
    },
    mounted(){
        const _this = this;
        // 获取到历史数据后设置监听事件
        _this.getHistory().then(() => {
            if (_this.history.length > 0) {
                _this.getHistoryCount();
                // 单个item点击删除
                document.querySelectorAll('.history_item__delete').forEach((ele) => {
                    ele.addEventListener('click', function (e) {
                        // 点击删除按钮，删除当前历史记录
                        _this.deleteHistory(e.target.dataset.url).then(() => {
                            _this.getHistory(); // 重新获取数据
                            _this.getHistoryCount();
                        });
                    });
                });
                document.querySelector('.footer__deleteAll').addEventListener('click', function () {
                    // 删除全部
                    _this.deleteAll().then(() => {
                        _this.getHistory();
                        _this.getHistoryCount();
                    });
                });
            }
        });
    }
}