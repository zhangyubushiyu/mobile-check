var txt = $('#phone'),
	btn = $('#btn'),
	result = '',
	key = '138da7d610209e302bf65f540ef92bb0';
$().ready(function() {
	$('#phone-form').validate({
		rules: {
			phone: {
				required: true,
				maxlength: 11,
				minlength: 7
			}
		},
		messages: {
			phone: {
				required: "请输入需要查询的手机号",
				minlength: "手机号需要7-11位"
			}
		}
	})
});
btn.click(function() {
	$.ajax({
		type: 'get',
		dataType: 'jsonp',
		url: 'http://apis.juhe.cn/mobile/get',
		data: {
			'phone': txt.val(),
			'key': key
		},
		success: function(data) {
			var html = '<li>省份：<span>' + data.result.province + '</span></li>\
								<li>城市：<span>' + data.result.city + '</span></li>\
								<li>区号：<span>' + data.result.areacode + '</span></li>\
								<li>邮编：<span>' + data.result.zip + '</span></li>\
								<li>运营商：<span>' + data.result.card + '</span></li>\
								<li>卡类型：<span>' + data.result.company + '</span></li>'
			$('#phone-html').html(html);
			$('#phone-val').html(txt.val());
			$("#phone-p").css('display', 'block');
		},
		error: function(jqXHR) {
			console.log('发生错误:' + jqXHR.status);
		}
	});
})