Autoupdate = Package.autoupdate.Autoupdate;

Html = (props) => {
    return (
        <html>
            <head>
                <link rel="stylesheet" type="text/css" className="__meteor-css__" href={`/packages/pelican-chat/public/pelican-chat.css?_dc=${Autoupdate.autoupdateVersion}`} />
                <script type="text/javascript" dangerouslySetInnerHTML={{__html: `__meteor_runtime_config__ = ${JSON.stringify(__meteor_runtime_config__)}`}} />
                <script type="text/javascript" src={`/packages/pelican-chat/public/pelican-chat.js?_dc=${Autoupdate.autoupdateVersion}`} />
                <title>Pelican</title>
                <meta charSet="utf-8" />
                <meta httpEquiv="content-type" content="text/html; charset=utf-8" />
                <meta httpEquiv="expires" content="-1" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta name="fragment" content="!" />
                <meta name="distribution" content="global" />
                <meta name="rating" content="general" />
                <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
            </head>
            <body>
                <div id="react-root" />
            </body>
        </html>
    );
}
