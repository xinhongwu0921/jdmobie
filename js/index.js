(function(window){
    //给页面添加滚动事件
    window.addEventListener('scroll',function (e) { 
        //获取滚动的距离
        var scrollTop=document.documentElement.scrollTop || document.body.scrollTop;
        //获取轮播图高度
        var slideHeight=document.querySelector('#slide').offsetHeight;
        if(scrollTop<slideHeight){
            // 5. 计算透明度值
            var opacity = scrollTop / slideHeight;
            console.log(opacity);
            // 6. 把透明的拼接到rgba上
            document.querySelector('#header').style.backgroundColor = 'rgba(222, 24, 27,' + opacity + ')';
        }else{
            document.querySelector('#header').style.backgroundColor = 'rgba(222, 24, 27  )';
        }
     })

     //倒计时功能
    //  1. 需要一个总的时间来做倒计时 暂时假设2小时
    //  2. 有一个定时器 每个一秒让总时间--
    //  3. 求到减减完后的总时间的时 分 秒
    //  4. 把时分秒的十位个位显示到对应span上 */
 // 1. 假设一个总时间 用来做倒计时--的 --减秒 总时间是2小时 得2小时对应秒数 未来这个倒计时的时间从后台获取
 var time = 2 * 60 * 60;
 console.log(time);
 // 4.1 获取所有span元素这种代码不需要重复执行放外面
 var spans = document.querySelectorAll('.seckill-downtime span');
 console.log(spans);
 // 2. 定义一个定时器每隔1秒让总时间--
 setInterval(function () {
     time--;
     // console.log(time);
     // 3. 把减完后的时分秒计算出来 总时间 / 60 / 60 向下取整 超出部分去掉 超出部分属于分钟
     var hour = Math.floor(time / 60 / 60);
     // console.log(hour);        
     // time % 3600 除以3600除不尽的部分都属于分钟 (不够一个小时都属于分钟就相当于去掉了小时部分)  / 60 对应的分钟数 向下取消
     var minute = Math.floor(time % 3600 / 60);
     // console.log(minute);
     // time % 60 只要除以60除不尽不够一分钟的都是秒数
     var second = time % 60;
     // console.log(second);
     // 4.2 把时分秒十位个位分别放到页面中的span上显示
     spans[0].innerHTML = Math.floor(hour / 10);
     spans[1].innerHTML = Math.floor(hour % 10);
     spans[3].innerHTML = Math.floor(minute / 10);
     spans[4].innerHTML = Math.floor(minute % 10);
     spans[6].innerHTML = Math.floor(second / 10);
     spans[7].innerHTML = Math.floor(second % 10);

 }, 1000)

     /*  3. 首页轮播图使用swiper插件 
         1. 引包 引入样式 引入js
         2. 写结构
         3. 修改样式
         4. 初始化 */
         var mySwiper = new Swiper('.swiper-container', {
            direction: 'horizontal', // 垂直切换选项
            loop: true, // 循环模式选项
    
            // 如果需要分页器
            pagination: {
                el: '.swiper-pagination',
            },
            // 添加轮播图的自动切换
            autoplay: true,
            autoplay: {
                delay: 1000,
                // 是否在轮播到最后一张停下来 loop模式下无效 true就会停下来 false不停
                stopOnLastSlide: false,
                // 当手触摸滑动后是否要禁止自动轮播图 true禁止 false不禁止
                disableOnInteraction: false,
            },
            // 添加一些轮播图动画效果
            // effect: 'fade',
            // effect: 'cube',
            // 如果需要前进后退按钮
            // navigation: {
            //     nextEl: '.swiper-button-next',
            //     prevEl: '.swiper-button-prev',
            // },
    
            // 如果需要滚动条
            // scrollbar: {
            //     el: '.swiper-scrollbar',
            // },
        })
})(window)