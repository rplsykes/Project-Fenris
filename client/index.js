requirejs.config({
    baseUrl: 'js',
    paths: {
        jquery: 'https://code.jquery.com/jquery-2.2.0',
        config: window.location + '/config/config',
        routes: window.location + '/config/routes',
        createjs: 'https://code.createjs.com/createjs-2015.11.26.min'
    }
})

define(["jquery"], function(jquery) {
    require(["main"]);
});