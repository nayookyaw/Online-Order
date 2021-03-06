
addProducts();
previewImage();
clearImage();

function addProducts() {
	$(".create_product").click(function (e) {
		$('.name_error').empty();
		$('.price_error').empty();

		$product_name = $(".name").val();
		$product_price = $(".price").val();
		$product_description = $(".description").val();
		$product_file = $(".file")[0].files[0];
		var form_data = new FormData();
		form_data.append('product_name', $product_name);
		form_data.append('product_price', $product_price);
		form_data.append('product_description', $product_description);
		form_data.append('_token', $('meta[name="_token"]').attr('content'));
		form_data.append('product_file' , $product_file);
		$.ajax({
			url : '/admin/products/create',
			method : 'post',
			data : form_data ,
			cache: false,
			contentType: false,
			processData: false,
			success : function (result) {
				swal("Sucess Add", {
					buttons: false,
					timer: 1000,
				});
				setTimeout(function(){ window.location = "/admin/products" }, 2000);
			},
			error : function (error){
				if (error.status == 500) {
					swal("Invalid Inputs, Too Large Size", {
						buttons: false,
						timer: 1000,
					});
				}
				if (error.responseJSON) {
					if (error.responseJSON.product_name) {
						$('.name_error').text(error.responseJSON.product_name[0]);
					}

					if (error.responseJSON.product_price) {
						$('.price_error').text(error.responseJSON.product_price[0]);
					}

					if (error.responseJSON.product_file) {
						$('.file_error').text(error.responseJSON.product_file[0]);
					}
				}

			}
		});
	});
}

function previewImage() {
	$(".file").change(function() {
		$(".img_preview").empty().append("<img id ='product_img' width='80%' height='40%'>&nbsp;&nbsp;<span class='btn_clear_img btn btn-danger'><span class='glyphicon glyphicon-trash'></span></span>");
	  readImage(this);
	  clearImage();
	});
}

function readImage(input) {
  if (input.files && input.files[0]) {
    var reader = new FileReader();
    reader.onload = function(e) {
      $('#product_img').attr('src', e.target.result);
    }
    reader.readAsDataURL(input.files[0]);
  }
}

function clearImage() {
	$(".btn_clear_img").click(function(e) {
		$("#product_img").attr('data-index', '');
		$(".product_content img").attr('src', '');
		$(".img_preview").empty();
		$('.file').val('');
	});
}
