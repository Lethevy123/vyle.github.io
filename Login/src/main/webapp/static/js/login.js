function validateForm() {
	var email = $('#email').val();
	$('#checkFormModel').modal('hide');
	var password = $('#password').val();
	var birthDay = $('#birthDay1').val();
	if(email == "" || password == "" ||birthDay == "") {
	   $('#checkFormModel').modal('show');
	   return false;
	}
}

function validateFormForgot() {
	var email = $('#email').val();
	$('#checkFormModel').modal('hide');
	if(email == "") {
	   $('#checkFormModel').modal('show');
	   return false;
	}
}

$(document).ready(function(){
	
	$('.datepicker').datetimepicker({
		format: 'd-m-yy',
	    timepicker: false,
	    datepicker: true,
	    weeks: true,
	    
	});
});



