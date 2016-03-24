FlowRouter.route('/pelican-chat', {
    action() {
        ReactDOM.render(
        	React.createElement(App(Chat)),
        	document.getElementById('react-root')
        );
    }
});
