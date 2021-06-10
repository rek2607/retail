function login()
{
	var emailval = $('#u10_input').val()
	if(emailval=="rekha@gmail.com")
	{
	window.location.href="/retail";

	}
	else
	{
		alert("Invalid credentials")
	window.location.href="/";

	}
}
function sign()
{
	window.location.href="/signup";

}
$('#u8').click(function(){
	window.location.href="/signup";

});

$(document).on('click','#u44',function(){
	window.location.href="/sco";
});
$(document).on('click','#u47',function(){
	window.location.href="/ticketswitch";

});
$(document).on('click','#u52',function(){
	window.location.href="/socialdistance";

});
$(document).on('click','#u149,#u161,#u193,#u182,#u98,#u60,#u128,#u108',function(){
	window.location.href="/retail";

});
$(document).on('click','#u199,#u134,#u71,#u55',function(){
	window.location.href="/";

});
$(document).on('click','#u166',function(){
	$('#u163').hide();
	$('#u177').show();

});
$(document).on('click','#u164',function(){
	$('#u163').show();
	$('#u177').hide();

});
$(document).on('click','#u198',function(){
	$('#u210').show();
	$('#u195').hide();

});
$(document).on('click','#u196',function(){
	$('#u195').show();
	$('#u210').hide();

});
$(document).on('click','#u79,#u80,#u99,#u98',function(){
	// $('#u75').show();
	// $('#u77').show();

	// $('#u93').hide();
	// $('#u95').hide();
	$('#u68_state1').hide();
	// $('#u77').hide();

	$('#u68_state0').show();


});

$(document).on('click','#u84,#u85',function(){
	$('#u68_state1').show();
	// $('#u77').hide();

	$('#u68_state0').hide();
	// $('#u95').show();

});
$(document).on('click','#u133',function(){
	$('#u68_state5').show();
	// $('#u77').hide();

	$('#u68_state4').hide();
	// $('#u95').show();

});
$(document).on('click','#u141',function(){
	$('#u68_state5').hide();
	// $('#u77').hide();

	$('#u68_state4').show();
	// $('#u95').show();

});
$(document).on('click','#u111,#u121',function(){
	$('#u68_state3').hide();
	// $('#u77').hide();

	$('#u68_state2').show();
	// $('#u95').show();

});
$(document).on('click','#u113',function(){
	$('#u68_state3').show();
	// $('#u77').hide();

	$('#u68_state2').hide();
	// $('#u95').show();

});
$(document).on('click','#u69,#u105,#u86',function(){
	
	window.location.href="/sco_tcs";

});
$(document).on('click','#u70,#u126,#u87',function(){
	
	window.location.href="/sco_azure";

});


