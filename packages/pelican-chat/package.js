Package.describe({
    name: 'pelican-chat',
    version: '0.0.1',
    summary: ''
});

Package.registerBuildPlugin({
    name: "builPelicanChat",
    use: [],
    sources: [
        'plugin/build-pelican-chat.js'
    ],
    npmDependencies: {
        "shelljs": "0.5.1"
    }
});

Package.onUse(function(api) {
    api.versionsFrom('1.0');

    api.use(['webapp', 'autoupdate'], 'server');
    api.use('ecmascript');
    api.use('react@0.14.3')
    api.use('rocketchat:lib');
    api.use('rocketchat:authorization');
    api.use('mongo');
    api.use('fourseven:scss');

    api.addFiles('server.js', 'server');
    api.addFiles('server/startup.js', 'server');

    api.addFiles('config.js', 'server');

    api.addFiles('server/components/html/html.jsx');

    // livechat app
    api.addAssets('public/pelican-chat.css', 'client');
    api.addAssets('public/pelican-chat.js', 'client');
});
