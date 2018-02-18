(function(){
    System.config({
        paths: {
            
        },
        map: {
            app: 'app',
            '@angular/common': 'node_modules/@angular/common/bundles/common.umd.js',
            '@angular/core' : 'node_modules/@angular/core/bundles/core.umd.js',
            '@angular/compiler' : 'node_modules/@angular/compiler/bundles/compiler.umd.js',
            '@angular/forms' : 'node_modules/@angular/forms/bundles/forms.umd.js',
            '@angular/http' : 'node_modules/@angular/http/bundles/http.umd.js',
            '@angular/platform-browser' : 'node_modules/@angular/platform-browser/bundles/platform-browser.umd.js',
            '@angular/platform-browser-dynamic' : 'node_modules/@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
            'rxjs' : 'node_modules/rxjs'
        },
        packages: {
            app: {
                main: './main.js',
                defaultExtension: 'js'
            },
            rxjs: {
                defaultExtension: 'js'
            }
        }
    })
})(this);