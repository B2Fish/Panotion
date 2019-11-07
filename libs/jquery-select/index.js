$(function () {
    var swiper = new Swiper('.frist', {
        centeredSlides: true,
        loop:true,
        autoplay: {
            delay: 2000,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });
    var swiper = new Swiper('.second', {
        centeredSlides: true,
        loop:true,
        autoplay: {
            delay: 2000,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });
    var swiper = new Swiper('.swiper1', {
        centeredSlides: true,
        loop:true,
        autoplay: {
            delay: 2000,
            disableOnInteraction: false,
        }

    });
    var swiper = new Swiper('.swiper2', {
        centeredSlides: true,
        loop:true,
        autoplay: {
            delay: 2000,
            disableOnInteraction: false,
        }
    });
    var swiper = new Swiper('.swiper3', {
        centeredSlides: true,
        loop:true,
        autoplay: {
            delay: 2000,
            disableOnInteraction: false,
        }
    });
    var swiper = new Swiper('.swiper4', {
        centeredSlides: true,
        loop:true,
        autoplay: {
            delay: 2000,
            disableOnInteraction: false,
        }
    });
    function nav_btn() {
        if ($('.search_li li:nth-child(2)').css('display') == 'none'){
            $('.search_li li:nth-child(2)').show();

        }
        else{
            $('.search_li li:nth-child(2)').hide();
        }
    }
    function search_btn() {
        $('input').show();
        $('input').focus();
    }
    $("input").blur(function(){
        $('input').hide();
    });
    // $(this).next('ul').slideToggle().siblings('ul').slideUp();

    // $(".dropdown").mouseover(function(){
    //     $(".dropdown-menu1").slideDown();
    // });
    // $(".dropdown").mouseout(function() {
    //     $(".dropdown-menu1").slideUp();
    // });
    var timer;
    var menuList = $('.dropdown-menu1');
    $('.dropdown').each(function(i) {//获取列表的大标题并遍历
        $(this).mouseover(function(){
            clearTimeout(timer);
            if($(menuList[i]).css('display') == 'none'){
                $(menuList[i]).slideDown(300);
            }

        });
        $(this).mouseout(function(){
            if($(menuList[i]).css('display') == 'block'){
                timer=setTimeout(function(){
                    $(menuList[i]).slideUp(300);

                },0);

            }

        });
    });
    /*
     $(".dropdown").mouseover(function(){

         clearTimeout(timer);
         //$(this).next('.dropdown-menu1').slideToggle().siblings('.dropdown-menu1').slideUp();
        $(this).children(".dropdown-menu1").slideDown();

     });
     $(".dropdown").mouseout(function(){
         timer=setTimeout(function(){
             $(".dropdown-menu1").slideUp();

         },1);

     });*/

    $(()=>{
        $('.video_con').click(()=>{
            if ( $('#video')[0].paused){
                $('.video_con').hide();
                $('#video')[0].play();

            }
            else{
                $('.video_con').show();
                $('#video')[0].pause();
            }

        })
    });

    var menuList1 = $('.menuList1');
    $('.menu > .menuParent > .ListTitlePanel > .ListTitle').each(function(i) {//获取列表的大标题并遍历
        $(this).click(function(){
            console.log(1111)
            if($(menuList1[i]).css('display') == 'none'){
                $(menuList1[i]).slideDown(300);
            }
            else{
                $(menuList1[i]).slideUp(300);
            }
        });
    });


    //打开提交页面
    function order(i) {
        jQuery('.order').fadeIn(500);
    }
    //刷新验证码
    function refreshCode(evt) {
        evt.src = evt.src.replace(/(\?_=.*)?$/gi, "") + "&_=" + parseInt((new Date).getTime() / 1E3)
    }
    ;


    //关闭窗口
    $('.btn-close').on('click', function(){
        $('.order').hide();
        $('#name').val(""),
            $('#mobile').val(""),
            $('#number').val(""),
            $('#costType').val("");
        $('#fb_vcode').val("");
    });
    //提交
    $('.cardsubs').on('click',function(){
        var name = $('#name').val(),
            mobile = $('#mobile').val(),
            number = $('#number').val(),
            province = $('#costType').val();
        vcode = $('#fb_vcode').val();
        hidden = $('#hidden').val();
        if (name.length < 1) {
            alert('请输入联系人!');
            return;
        }
        if (mobile.length < 1) {
            alert('请输入联系电话!');
            return;
        }
        if (mobile.length < 11 || mobile.length > 13) {
            alert('手机或电话号码格式不正确。如果是固定电话，必须形如(010-87876787)!');
            return;
        }
        if (number.length < 1) {
            alert('请输入订购数量!');
            return;
        }
        r   =   /^[0-9]*[1-9][0-9]*$/　;　//正整数
        if(!r.test(number)){
            alert('订购数量请填写正整数!');
            return;
        }

        if (number.length < 1||number.length > 11) {
            alert('请填写1-11位订购数量!');
            return;
        }
        if (province.length<2) {
            alert('请选择所在省份!');
            return;
        }
        if (vcode.length < 1) {
            alert('请输入验证码');
            return;
        }

        var data = { name: name, mobile: mobile, number: number, province: province,vcode:vcode,hidden:hidden};
        $('#hidden').val("");
        //console.log(hidden);
        //console.log($('#hidden').val());
        //console.log(data);
        $.post('/component/feedback?ajax=onecardorder', data, function(r){

            var d = JSON.parse(r);
            if (d.success) {
                alert('您已成功提交物联卡订购需求，后续客户经理将与您联络，谢谢！');
                jQuery('#name').val(""),
                    jQuery('#mobile').val(""),
                    jQuery('#number').val(""),
                    jQuery('#txtRegion').val("");
                $('#fb_vcode').val("");
                $('.order').fadeOut();
                location.reload();

            } else {
                if(d.message==='1'){
                    jQuery('#vcode').attr('src',jQuery('#vcode').attr('src').replace(/(\?_=.*)?$/gi, "") + "&_=" + parseInt((new Date).getTime() / 1E3));
                    alert('验证码错误，请重新输入');
                    $('#fb_vcode').val("");
                    $('#hidden').val(hidden);

                }else
                    alert(d.message ? d.message : '提交失败,请稍候再试!');
                $('#hidden').val(hidden);
            }
        });
    });

    //绑定点击事件
    function bindClick(){
        $('.contentDiv').on('click',function(){
            $('#txtRegion').val($(this).html());
            $('#divList').css('display','none');
        })
    }

});

   /*

*/
