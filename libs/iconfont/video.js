/**
 app核心代码
 **/

var App = function () {

    /*
     __________________________________
    |                                  |
    |       关于我们--公司简介         |
    |                                  |
    +++++++++++++++++++++++++++++++++++
    */
    var playVideo = function(){

        var core = CKobject.Platform();//平台(浏览器)内核
        var browser = CKobject.browser()['B'];//浏览器
        var browserVersion = CKobject.browser()['V'];//浏览器版本
        var hasFlashPlugin = CKobject.Flash()['f'];//是否安装了flash插件
        var flashPluginVersion = CKobject.Flash()['v'];//flash插件版本
        var isHTML5 = CKobject.isHTML5();//是否支持HTML5


        //初始化html5播放器
        var initHtml5Player = function(){
            var flashvars={
                p:0,
                e:1,
                //i:'../assets/images/video_show.jpg'//宣传图，初始化播放器时的图片
                i:'/images/iot_video.png'//宣传图，初始化播放器时的图片
            };
            //var video=['../assets/videos/video.mp4->video/mp4'];//播放的视频文件，如果有多个文件使用|隔开
            var video=['/images/iot-intro-2.mp4->video/mp4'];//播放的视频文件，如果有多个文件使用|隔开
            var support=['all'];
            CKobject.embedHTML5('videos','ckplayer_videoPlayer',720,468,video,flashvars,support);

        };

        //初始化flash播放器,如果IE9以下则使用flash播放器,flash播放器站点访问才生效
        var  initFlashPlayer = function(){
            var flashvars={
                v:60,
                f:'/images/iot-intro-2.mp4',
                c:0,
                b:1,
                //i:'../assets/images/video_show.jpg'
                i:'/images/iot_video.png'
            };
            var params={bgcolor:'#FFF',allowFullScreen:true,allowScriptAccess:'always',wmode:'transparent'};
            CKobject.embedSWF('media/static_page/assets/plugins/ckplayer/ckplayer.swf','videos','ckplayer_videoPlayer','720','468',flashvars,params);
        };

        //点击页面播放按钮事件
        $(".video_box a.btn").click(function(){
            jQuery('.video_dialog').fadeIn();

            if(isHTML5){
                initHtml5Player();
            }else{
                initFlashPlayer();
            }
            //取消默认为  videoPlayer 加的style样式
            //$(".videos").removeAttr("style").show();
        });


        jQuery('.video_dialog dd a > img').on('click', function(){
            jQuery('.video_dialog').fadeOut();
        });
    };

    return {

        init:function(){

            playVideo();
        },
        getResponsiveBreakpoint: function(size) {
            var sizes = {
                'xs' : 480,     //
                'sm' : 768,     //
                'md' : 992,     //
                'lg' : 1200     //
            };

            return sizes[size] ? sizes[size] : 0;
        }

    };


}();


jQuery(document).ready(function() {
    App.init(); //初始化App
});