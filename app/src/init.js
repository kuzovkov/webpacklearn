import './a.js';
import './b.js';

console.log('./init');
console.log('test-watch!');

import * as $ from 'jquery';

$('#test').html('This is content installed jQuery');