import {enableProdMode, provide} from "@angular/core";
import {bootstrap} from '@angular/platform-browser-dynamic';
import {ROUTER_PROVIDERS} from '@angular/router-deprecated';
import {HashLocationStrategy, LocationStrategy} from '@angular/common';
import {HTTP_PROVIDERS} from '@angular/http';

const ENV_PROVIDERS = [];
// depending on the env mode, enable prod mode or add debugging modules
if (process.env.ENV === 'build') {
  enableProdMode();
}

/*
 * App Component
 * our top level component that holds all of our components
 */
import {AppComponent} from './client/components/app.component';

/*
 * Bootstrap our Angular app with a top level component `App` and inject
 * our Services and Providers into Angular's dependency injection
 */
document.addEventListener('DOMContentLoaded', function main() {
  return bootstrap(AppComponent, [
    // These are dependencies of our App
    ...HTTP_PROVIDERS,
    ...ROUTER_PROVIDERS,
    ...ENV_PROVIDERS,
    provide(LocationStrategy, {useClass: HashLocationStrategy}) // use #/ routes, remove this for HTML5 mode
  ])
  .catch(err => console.error(err));
});
