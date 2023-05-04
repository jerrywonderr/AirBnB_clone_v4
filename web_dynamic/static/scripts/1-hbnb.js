$(document).ready(() => {
    let checkedAmenitiesId = [];
    let checkedAmenitiesName = [];
    $('.amenities .popover input[type=checkbox]').on('click', (ev) => {
	const checkBox = ev.target;
	const amenityId = $(checkBox).attr('data-id');
	const amenityName = $(checkBox).attr('data-name');
	const amenityIndex = checkedAmenitiesId.indexOf(amenityId);
	if (amenityIndex !== -1) {
	    // amenity is already checked,so remove
	    checkedAmenitiesId.splice(amenityIndex, 1);
	    checkedAmenitiesName.splice(amenityIndex, 1);
	} else {
	    // amenity wasn't checked, add it
	    checkedAmenitiesId.push(amenityId);
	    checkedAmenitiesName.push(amenityName);
	}

	$('.amenities h4').text(checkedAmenitiesName.join(', '));
    });
});
