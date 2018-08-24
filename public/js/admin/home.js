$(window).on ('load', function (){
	getSummary();
});

function getSummary() {
	$.ajax({
		url : '/admin/home/summary',
		method : 'get',
		data : {
			'_token' : $('meta[name="_token"]').attr('content')
		},
		success : function (result) {
			$("tbody").empty().append(result);
			setPaging();
		},
		error : function (error){
			$error = error.responseJSON.error;
			swal({ text: $error });
		}
	});
}

function setPaging() {
	$("#today_users").pagination();
}
