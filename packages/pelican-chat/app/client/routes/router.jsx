FlowRouter.route('/pelican-chat', {
    action() {
        ReactDOM.render(<Chat />, document.getElementById('react-root'));
    }
});
