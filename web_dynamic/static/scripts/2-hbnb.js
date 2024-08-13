// scrippt for handling 1 - hbnb.html
$(document).ready(function () {
  const AttributeObj = {};
  $('.amenities .popover input').change(function () {
    if ($(this).is(':checked')) {
      AttributeObj[$(this).attr('data-name')] = $(this).attr('data-id');
    } else if ($(this).is(':not(:checked)')) {
      delete AttributeObj[$(this).attr('data-name')];
    }
    const names = Object.keys(AttributeObj);
    $('.amenities h4').text(names.sort().join(', '));
  });
	url = "http://0.0.0.0:5001/api/v1/status/";
	$.getJSON(url, function (data) {
		stat = data.status;
		if (stat === "OK") {
			$('div#api_status').addClass('available');
		} else {
			$('div#api_status').removeClass('available');
		}
	});
});
