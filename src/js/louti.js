// 首页楼梯效果
const $louti = $('.leftMenu')
const $btn = $('.leftMenu li')
const $con = $('.con')
let $top = $(window).scrollTop()

// 页面下滚至一定高度，显示楼梯
$(window).on('scroll', function() {
    $top = $(window).scrollTop()
    if ($top > 500) {
        $louti.show()
    } else {
        $louti.hide()
    }

    // 页面滚动至某一个楼层，对应的楼梯添加active类
    $con.each(function(index, element) {
        let $conTop = $(element).offset().top
        if ($conTop > $top) {
            $btn.eq(index).addClass('active').siblings().removeClass('active')
            return false
        }
    })
})

// 点击楼梯，跳转至对应楼层
$btn.on('click', function() {
    let $num = $(this).index()
    $btn.eq($num).addClass('active').siblings().removeClass('active')
    $topValue = $con.eq($num).offset().top
    $('html').animate({
        scrollTop: $topValue - 90
    })
})