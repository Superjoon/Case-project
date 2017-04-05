$(function (){

    var i = 0,
        Size = $('.banner .img>li').size();
    $('.banner .number>li').first().addClass('on');

    $('.banner .btn_l').click(function (){
        i++;
        if (i == Size){
            i = 0;
        };
        $('.banner .img').animate({left: -i*550}, 233);
        $('.banner .number>li').eq(i).addClass('on').siblings().removeClass('on')
    });


    $('.banner .btn_r').click(function (){
        i--;
        if (i == -1){
            i = Size-1;
        };

        $('.banner .img').animate({left: -i*550}, 233);
        $('.banner .number>li').eq(i).addClass('on').siblings().removeClass('on')
    });


/*
    var i = 0;
    //: 数值从0开始;

    var Size = $('.banner .img>li').size();
    //: 需要设定变量获取到所有轮播图片的数量,以便做判断;

    $('.banner .number>li').first().addClass('on');
    //: 获取按钮的样式,并且添加后续需要改变的效果,
    //: 点击按钮改变颜色.通过添加事先设置好的类名字实现
    $('.banner .btn_l').click(function (){
        i++
        if (i == Size) {
            i = 0;
        }
        //: 在执行的元素内添加,似 i 的值根据事件次数递增;
        $('.banner .img').stop().animate({left: -i*550}, 500);
        //: 点击之后经过上面的判断条件.实现最终的动画效果.向左偏移.
        $('.banner .number>li').eq(i).addClass('on').siblings().removeClass('on');
        //: 随着偏移给数字按钮的li添加提前设置好的on样式类.
    });
    //: 获取到要操作动画移动的元素,
    //: 执行animate动画效果,改变其css中position属性的值;
    //: i++  =1; 点1次执行自身+1再×550,第二次自身+1再+1再×550依次类推;
    //: animate() 方法执行 CSS 属性集的自定义动画
    //:数字值可创建动画（比如 "margin:30px"）字符串值无法创建动画（比如 "background-color:red"）

    /!*向左轮播代码OVER*!/

    /!*向右轮播代码ACTION*!/

    $('.banner .btn_r').click(function (){
        i--
        //: 初始值是0,向左边是递增,向右边自然就递减,当1是0,点击一下成-1了.
        if (i == -1) {
            //: 当点击的时候
            i = Size-1
        }
        $('.banner .img').stop().animate({left: -i*550}, 400);
        $('.banner .number>li').eq(i).addClass('on').siblings().removeClass('on');

    });
*/























});


























































































