/**
 * 搜索
 * Created by xinchao.dou on 2017/5/3.
 */
import '../styles/search.css';
export default {
    name: 'Search',
    methods: {
        /**
         * 搜索
         */
        search: function () {
            const _this = this;
            if (_this.inputVal.length > 0) {
                // 可以发起搜索
                window.location.href = 'http://cn.bing.com/search?q=%s'.replace('%s', _this.inputVal);
            } else {
                window.location.href = '';
            }
        }
    },
    computed: {
        inputVal: function () {
            return this.inputStr.trim();
        }
    },
    data() {
        return {
            inputStr: ''
        }
    },
    render(h) {
        const _this = this;
        return <div class="search__container">
            <div class="search">
                <input id="search" class="search__input" type="text" placeholder="必应搜索" value={_this.inputVal}
                       autocomplete="off"
                       onInput={(e) => {
                           _this.inputStr = e.target.value;
                       }}/>
                <div id="searchBtn" class="search__icon"></div>
            </div>
            {/*搜索建议*/}
            {/*<ul class="search__result">*/}
            {/*<li></li>*/}
            {/*</ul>*/}
        </div>;
    },
    mounted() {
        const _this = this;
        document.getElementById('search').addEventListener('keypress', e => {
            e.keyCode === 13 && _this.search();
        });
        document.getElementById('searchBtn').addEventListener('click', _this.search);
    }
}