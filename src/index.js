import _ from 'lodash';

require('../app.js')


require('../stylesheets/modules/_all.scss')

function component() {
    var element = document.createElement('div');

    element.innerHTML = _.join(['Hello', 'webpack'], ' ')

    return element;
}

document.body.appendChild(component());