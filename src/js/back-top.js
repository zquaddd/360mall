// 返回顶部
const $back = $('.back-top')

$back.on('click', function() {
    $('html').animate({
        scrollTop: 0
    })
})