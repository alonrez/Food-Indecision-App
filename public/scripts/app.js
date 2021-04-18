'use strict';

var appRoot = document.getElementById('app');
var toggleVisibility = function toggleVisibility() {
    visibility = !visibility;
    render();
};

var visibility = false;

var render = function render() {
    var jsx = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            'Visibility Toggle'
        ),
        React.createElement(
            'button',
            { onClick: toggleVisibility },
            visibility ? 'Hide details' : 'Show Details'
        ),
        visibility && React.createElement(
            'div',
            null,
            React.createElement(
                'p',
                null,
                'Hey, these are some details'
            )
        )
    );

    ReactDOM.render(jsx, appRoot);
};
render();
