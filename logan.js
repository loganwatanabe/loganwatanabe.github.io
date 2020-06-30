$(document).ready(function() {
	$("#menu-button").on("click",(function(event){
		event.preventDefault()

		var width = $("#aside").width()
		if(width == 0){
			$("#aside").css("width","256px")
			$("#aside").attr('style', 'width: 256px !important')

		}else{
			$("#aside").css("width","0")
			$("#aside").attr('style', 'width: 0px !important')
		}
	}))
})