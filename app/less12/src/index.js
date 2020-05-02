import action from './common/action';
import app from './common/app';
import $ from 'jquery';
import _ from 'lodash';

$('body').html('Index');
function getRandomNumber() {
    return Math.round(Math.random() * 100);
}

var result = _.times(5, getRandomNumber);
console.log(result);
console.log('index.js');
app();
action();