import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {FormsModule} from '@angular/forms';
import {AboutComponent} from './about/about.component';
import {HomeComponent} from './home/home.component';
import {PostsComponent} from './posts/posts.component';
import {PostComponent} from './post/post.component';
import {AboutExtraComponent} from './about-extra/about-extra.component';
import {RouterModule} from '@angular/router';
import {AppRoutingModule} from './app-routing.module';
import { ErrorPageComponent } from './error-page/error-page.component';
import {TodosComponent} from './todos/todos.component';
import {TodoFormComponent} from './todo-form/todo-form.component';
import {TodosFlterPipe} from './shared/todos-flter.pipe';
import {HttpClient, HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponent,
    PostsComponent,
    PostComponent,
    AboutExtraComponent,
      TodosComponent,
      TodoFormComponent,
      TodosFlterPipe,
    ErrorPageComponent
  ],
    imports: [
        BrowserModule,
        FormsModule,
        RouterModule,
        AppRoutingModule,
        HttpClientModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
