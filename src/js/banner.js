// 轮播图
const $imgLi = $('.lunbo li')
const $circle = $('.circle li')
const $left = $('.zuo')
const $right = $('.you')
const $banner = $('.banner')
let $num = 0
let $timer = null

// 点击小圆点变换对应图片
$circle.on('click', function() {
    $num = $(this).index()
    change()
})

// 点击左箭头
$left.on('click', function() {
    $num--
    if ($num < 0) {
        $num = $imgLi.length - 1
    }
    change()
})

// 点击右箭头
$right.on('click', function() {
    $num++
    if ($num > $imgLi.length - 1) {
        $num = 0
    }
    change()
})

// 封装轮播图
function change() {
    $imgLi.eq($num).stop(true).animate({ opacity: 1 }).siblings().stop(true).animate({ opacity: 0 })
    $circle.eq($num).addClass('active').siblings().removeClass('active')
}
// 自动变换
$timer = setInterval(function() {
    // 相当于让右箭头一直点击，造成的自动变换的效果
    $right.click()
}, 3000)

// 鼠标进入/移出，自动变换停止/开始
$banner.hover(function() {
    clearInterval($timer)
}, function() {
    $timer = setInterval(function() {
        $right.click();
    }, 3000);
})