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
});
