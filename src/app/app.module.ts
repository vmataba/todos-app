import {isDevMode, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {RoutingModule} from "./routing.module";
import {AuthModule} from "./modules/auth/auth.module";
import {TodoModule} from "./modules/todo/todo.module";
import {RouterModule} from "@angular/router";
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {HttpClientModule} from "@angular/common/http";
import {appReducers, metaReducers} from "./store/reducers";
import { LayoutModule } from './modules/layout/layout.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot(appReducers, {metaReducers}),
    EffectsModule.forRoot([]),
    RoutingModule,
    LayoutModule,
    AuthModule,
    TodoModule,
    RouterModule,
    StoreDevtoolsModule.instrument({maxAge: 25, logOnly: !isDevMode()}),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
