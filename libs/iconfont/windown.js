// JavaScript Document
/*调用方法--设置主窗体*/
var Twindow = {
    bg:function(){
        var html= "<div class=\"ui-mask\"></div>";
        return html;
    },
    title:function(tit){
        var html="<div class=\"ui-window-header\"><a action-type=\"window-close\" class=\"ui-window-close\" href=\"javascript:;\">×</a><h3>"+tit+"</h3></div>"
        return html;
    },
    content:function(content){
        var html="<div class=\"ui-window-body\">"+content+"</div>"
        return html;
    },
    button_db:function(){
        var html="<div class=\"ui-window-footer\"><a class=\"ui-window-ok butn smo-butn\" action-type=\"window-ok\" href=\"javascript:;\"><i></i>"+ iot.windown.ok +"</a><a class=\"ui-window-cancel butn smo-butn  smo-butn-gray\" action-type=\"window-cancel\" href=\"javascript:;\"><i></i>"+ iot.windown.cancel +"</a></div>"
        return html;
    },
    button_d:function(){
        var html="<div class=\"ui-window-footer\"><a class=\"ui-window-ok butn smo-butn smo-butn-orange\" action-type=\"window-ok\" href=\"javascript:;\"><i></i>"+ iot.windown.ok +"</a></div>"
        return html;
    },
    button_b:function(){
        var html="<div class=\"ui-window-footer\"><a class=\"ui-window-cancel butn smo-butn  smo-butn-gray\" action-type=\"window-cancel\" href=\"javascript:;\"><i></i>"+ iot.windown.cancel +"</a</div>"
        return html;
    }
}
/*操作窗体*/
function edwindow(that,callback){
    var _mask=$(".ui-mask"),_window=that,_close=_window.find(".ui-window-close"),_cancel=_window.find(".ui-window-cancel"),_ok=_window.find(".ui-window-ok"),_closeLog=_window.find(".close-window");
    //console.log(that);
    _close.click(function(){
        _mask.hide();
        _window.hide();
    });
    _closeLog.click(function(){
        _mask.hide();
        _window.hide();
    });
    _cancel.click(function(){
        _mask.hide();
        _window.hide();
    });
    _ok.click(callback);
};
/*构筑主窗体*/
function popwindow(obj){
    var _mask=$(".ui-mask")
    var _tit=obj.title,
        _con=obj.content,
        _width=obj.width,
        _db=obj.db,
        _body=$("body"),
        chtml;
    chtml=$("<div class=\"ui-window\"></div>");

    if(_tit != null){
        chtml.append(Twindow.title(_tit));
    }
    chtml.append(Twindow.content(_con));
    switch (_db){
        case 1:
            chtml.append(Twindow.button_d());
            break;
        case 2:
            chtml.append(Twindow.button_db());
            break;
        case 3:
            chtml.append(Twindow.button_b());
            break;
    }
    _body.append(chtml.show());
    if(_mask.length<=0){
        chtml.after(Twindow.bg())
    }else{
        _mask.show();
    }
    edwindow(chtml,obj.ok);
    chtml.width(_width);
    var width = chtml.width();
    var height = chtml.height();
    var _scroll = $(document).scrollTop();
    chtml.css({
        'margin-left':-width/2,
        'margin-top': -height/2,
        '_margin-top': -(height/2+_scroll)
    });
    return chtml;
}