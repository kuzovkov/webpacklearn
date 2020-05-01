import $ from 'jquery';

function StartApplication(someParams) {
    console.log(someParams);
    $('body').html(someParams);
}


StartApplication('Hello world');