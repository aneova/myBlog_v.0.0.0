import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {AboutComponent} from './about/about.component';
import {PostComponent} from './post/post.component';
import {PostsComponent} from './posts/posts.component';
import {AboutExtraComponent} from './about-extra/about-extra.component';
import {TodosComponent} from './todos/todos.component';
import {TodoFormComponent} from './todo-form/todo-form.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import {PlayerComponent} from './player/player.component';
import {RegistrationComponent} from './registration/registration.component';


const routes: Routes = [
    {path:'', component: HomeComponent},
    {path: 'about', component: AboutComponent},
    {path: 'todos', component: TodosComponent},
    {path: 'todosform', component: TodoFormComponent},
    {path: 'player', component: PlayerComponent},
    {path: 'posts', component: PostsComponent},
    {path: 'posts/:id', component: PostComponent},
    {path: 'registration', component: RegistrationComponent},
    {path: 'about/extra', component: AboutExtraComponent},
    {path: 'error', component: ErrorPageComponent},
    {path: '**', redirectTo: 'error'}
    ];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {

}


