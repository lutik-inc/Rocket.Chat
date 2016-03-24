cd packages/pelican-chat/app
meteor build .meteor/build/ --directory

mkdir -p ../public

rm -f ../public/*

cp .meteor/build/bundle/programs/web.browser/*.css ../public/pelican-chat.css
cp .meteor/build/bundle/programs/web.browser/*.js ../public/pelican-chat.js

# echo "body {background-color: red;}" > livechat.css

rm -rf .meteor/build/
