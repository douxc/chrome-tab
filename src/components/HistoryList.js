/**
 * 浏览历史
 * Created by xinchao.dou on 2017/5/3.
 */
import '../styles/historyList.css';
import {mapActions, mapGetters} from 'vuex';
export default {
    name: 'HistoryList',
    computed: {
        ...mapGetters(['history'])
    },
    methods: {
        ...mapActions(['getHistory'])
    },
    render(h) {
        const _this = this;
        return <ul class="history">
            {_this.history.map(history => {
                return <li class="history_item">
                    <a class="history_item__title text-ellipsis" href={history.url} title={history.title}>
                        {history.title}
                    </a>
                    <a class="history_item__url text-ellipsis" href={history.url} title={history.title}>
                        {history.url}
                    </a>
                    {/*<button id={history.url} onclick={_this.deleteHistory}>delete</button>*/}
                </li>;
            })}
        </ul>
    },
    mounted(){
        this.getHistory();
    }
}