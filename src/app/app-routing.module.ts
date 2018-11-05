import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ContentFullComponent } from './content-full/content-full.component';
import { AboutComponent } from './content-full/content/about/about.component';
import { BlogsComponent } from './content-full/content/blogs/blogs.component';
import { ContactComponent } from './content-full/content/contact/contact.component';
import { UsersComponent } from './content-full/content/users/users.component';

const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full'},
    { path: 'home', component: HomeComponent},
    { path: 'content-full', component: ContentFullComponent, children: [
        { path: 'about', component: AboutComponent},
        { path: 'blogs', component: BlogsComponent},
        { path: 'contact', component: ContactComponent},
        { path: 'users', component: UsersComponent},
    ]},
    { path: '**', redirectTo: '/home'}
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
