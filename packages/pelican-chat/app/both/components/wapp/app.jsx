App = (Component) => React.createClass({
    displayName: `App(${Component.displayName})`,

    render() {
        return (
            <IntlProvider locale={'ru-RU'} messages={messages['ru-RU']}>
                <Component />
            </IntlProvider>
        );
    }
});
