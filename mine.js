$(document).ready(function (){
    a();
});

function a(){
    if ($('#hiddentype1').attr('disabled') == "disabled") {
        $('#hiddentype1').removeAttr('disabled');
        $('span[style="color:#888;"]').replaceWith('<span>设置对全部好友不留脚印 [Crack by <a href="http://www.renren.com/267882905">Xiaoyu Tai</a>]</span>');
        $('a[target="_blank"]').remove();
    }
    //$('.site-menu-nav-box').append($('#footPrint'));
}
