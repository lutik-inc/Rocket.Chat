WebApp = Package.webapp.WebApp;

WebApp.connectHandlers.use('/pelican-chat/', (req, res, next) => {
    res.setHeader('content-type', 'text/html; charset=utf-8');

    html = ReactDOMServer.renderToStaticMarkup(
        React.createElement(Html)
    );

    res.write(html);
    res.end();
});
