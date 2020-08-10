// 注册
const $count = $('.number')
const $pswd = $('.pswd')
const $tishi = $('.tishi')

$count.on('blur', function() {
    // console.log($(this).val())
    if ($(this).val() != '') {
        let reg = /^1[3578]\d{9}$/
        if (reg.test($(this).val())) {
            $tishi.eq(0).html('√')
            $tishi.eq(0).css({ color: 'green' })
        } else {
            $tishi.eq(0).html('手机号格式有误')
            $tishi.eq(0).css({ color: 'red' })
        }

    }
})