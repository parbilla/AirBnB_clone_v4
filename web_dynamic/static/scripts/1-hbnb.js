$('document').ready(function () {
    new_list = {};
    $('INPUT[type="checkbox"]').change(function(){
	let id = $(this).attr('data-id');
	let name = $(this).attr('data-name');
	if ($(this).is(':checked')){
	    new_list[id] = name;
	}
	else {
	    delete new_list[id];
	}

    });
    
});
