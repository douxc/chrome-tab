/**
 * 首页
 * Created by xinchao.dou on 2017/5/2.
 */
import NavBar from './NavBar'; // 顶部导航条
import Search from './Search'; // 搜索框
import PopWebsites from './popwebsites/Popwebsites'; // 常用网址
import HistoryList from './HistoryList'; // 浏览历史
// import Apps from './AppList'; // 应用
export default {
    name: 'customerCom',
    mounted(){
        // this.$axios.get('https://unsplash.com/napi/feeds/home').then(res => {
        //     return res.data;
        // }).then(data => {
        //     console.log(data);
        // });
    },
    render(h){
        return <section>
            <NavBar></NavBar>
            <div class="content">
                <Search></Search>
                <PopWebsites></PopWebsites>
                {/*<Apps></Apps>*/}
                <HistoryList></HistoryList>
            </div>
        </section>;
    }
};