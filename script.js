$(document).ready( function(){

    $('#rodabtn').click( function(){

        var uurl = $('#searchinput').val();
        console.log('clicked:' + uurl);

        $.get(uurl, function(data) {

            console.log('starting: ');

            var imgs = $('<div/>').html(data).find('img');
            imgs.each(function(i, img) {
                alert(img.src); // show a dialog containing the url of image
            });


        });


    })

});