$(document).ready(function () {
    let new_dict = {};
    $('INPUT[type=checkbox]').change(function (){
	let id = $(this).data('id');
	let name = $(this).data('name');
	if ($(this).is(':checked')){
	    new_dict[id] = name;
	}
	if (!$(this).is(':checked')) {
	    delete new_dict[id];
	}
	const new_list = []
	for (const name in new_dict){
	    new_list.push(new_dict[name]);
	}
	$('div.amenities h4').text(new_list.join(', '));
    });
});
