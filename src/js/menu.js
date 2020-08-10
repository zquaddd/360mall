// 二级菜单
const $listLi = $('.list li')
const $menu = $('.menu')
const $item = $('.menu .item')

$listLi.hover(function() {
    // console.log($(this).index())
    $(this).addClass('active').siblings().removeClass('active')
    $item.eq($(this).index()).show().siblings().hide()
    $menu.show()
}, function() {
    $menu.hide()
})

$menu.hover(function() {
    $menu.show();
}, function() {
    $menu.hide();
});