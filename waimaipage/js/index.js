window.onload = function (){
    document.onscroll = function (){
        // 获取滚动条的纵坐标的值
        let s1 = document.documentElement.scrollTop;   // pc端
        let s2 = document.body.scrollTop;  // 移动端
        let scroll = s1 == 0? s2 : s1;
        console.log('纵坐标： ' + scroll)
        let search = document.querySelector('#search-fixed-box')
        // 获取视口的宽度
        let width = document.documentElement.clientHeight;
        console.log('视口： ' + width*0.12)
        if (scroll > width*0.12){
            // search变固定定位
            search.style.position = 'fixed'
            search.style.top = 0
            search.style.left = 0
        }else{
            search.style.position = 'static'
        }
    }
}