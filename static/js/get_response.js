var input = $("#question-input");

input.on("keypress", function (e) {
	if (e.which === 13) { // si touche est égal à ENTER

		$.ajax({
			url: "https://yesno.wtf/api/",
			type: "GET",
			dataType: "json",
			success: function (data) {

				var yesNo = tranlateYesNo(data.answer);
				var text = $("<div class='response-text'>" + yesNo + "</div>");

				var response = $("#response");

				response.empty();

				response.css({
					"background-image": "url('" + data.image + "')"
				});
				response.append(text);
			},
			error: function (request, error) {
				alert("Request: " + JSON.stringify(request));
			}
		});
	}
});

function tranlateYesNo(yesNo) {
	if (yesNo == "yes") {
		return "Oui !";
	} else {
		return "Non...";
	}

}