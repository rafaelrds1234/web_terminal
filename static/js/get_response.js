var htmlInput = $("#question-input");

htmlInput.on("keypress", function (e) {
	if (e.which === 13) { // si touche est égal à ENTER

		$.ajax({
			url: "https://yesno.wtf/api/",
			type: "GET",
			dataType: "json",
			success: function (data) {

				var yesNo = data.answer;
				var ouiNon = tranlateYesNo(yesNo);
				var htmlOuiNon = $("<div class='response-text'>" + ouiNon + "</div>");

				var htmlResponse = $("#response");

				htmlResponse.empty();

				htmlResponse.css({
					"background-image": "url('" + data.image + "')"
				});
				htmlResponse.append(htmlOuiNon);
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