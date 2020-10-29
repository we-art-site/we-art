$(document).ready(function() {
	$("form").submit(function() { 					//	поменять селектор формы
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", 										//	поменять путь, если файл не в корне
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});
});