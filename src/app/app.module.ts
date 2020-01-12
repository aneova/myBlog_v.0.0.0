import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
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
import {HttpClientModule} from '@angular/common/http';
import { PlayerComponent } from './player/player.component';
import { MaterialModule } from './material.module';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule, MatListModule} from '@angular/material';
import { ModelWindowComponent } from './model-window/model-window.component';
import {RefDirective} from './ref.directive';
import { RegistrationComponent } from './registration/registration.component';

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
    ErrorPageComponent,
    PlayerComponent,
    ModelWindowComponent,
      RefDirective,
      RegistrationComponent
  ],
    imports: [
        BrowserModule,
        FormsModule,
        RouterModule,
        AppRoutingModule,
        HttpClientModule,
        MaterialModule,
        MatToolbarModule,
        BrowserAnimationsModule,
        MatProgressBarModule,
        MatIconModule,
        MatListModule,
        MatButtonModule,
        ReactiveFormsModule
        // MatProgressBarModule,
    ],
  providers: [],
    entryComponents:[ModelWindowComponent],
  bootstrap: [AppComponent]
})
export class AppModule {
}
