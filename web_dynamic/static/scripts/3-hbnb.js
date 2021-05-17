$(document).ready(function() {
    let new_dict = {};
    $('INPUT[type=checkbox]').change(function() {
        let id = $(this).data('id');
        let name = $(this).data('name');
        if ($(this).is(':checked')) {
            new_dict[id] = name;
        }
        if (!$(this).is(':checked')) {
            delete new_dict[id];
        }
        const new_list = []
        for (const name in new_dict) {
            new_list.push(new_dict[name]);
        }
        $('div.amenities h4').text(new_list.join(', '));
    });
});
$.getJSON('http://0.0.0.0:5001/api/v1/status/', function(data) {
    if (data.status === 'OK') {
        $('#api_status').addClass('available');
    } else {
        $('#api_status').removeClass('available');
    }
});
$.ajax({
    type: 'POST',
    url: 'http://0.0.0.0:5001/api/v1/places_search',
    data: '{}',
    dataType: 'json',
    contentType: 'application/json',
    success: function (data) {
      for (let i = 0; i < data.length; i++) {
        let place = data[i];
        $('.places ').append('<article><h2>' + place.name + '</h2><div class="price_by_night"><p>$' + place.price_by_night + '</p></div><div class="information"><div class="max_guest"><div class="guest_image"></div><p>' + place.max_guest + '</p></div><div class="number_rooms"><div class="bed_image"></div><p>' + place.number_rooms + '</p></div><div class="number_bathrooms"><div class="bath_image"></div><p>' + place.number_bathrooms + '</p></div></div><div class="description"><p>' + place.description + '</p></div></article>');
      }
    }
});
