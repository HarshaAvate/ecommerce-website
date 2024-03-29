
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProjectComponent } from './project/project.component';
import { BlogComponent } from './blog/blog.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { ServicesComponent } from './services/services.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { CustomerDetailComponent } from './customer-detail/customer-detail.component';

const routes: Routes = [
  {
  path:"home",
  component: HomeComponent,
  },
  {
    path:"project",
    component:ProjectComponent
  },
  {
    path:"home",
    component: HomeComponent,
  },
  {
    path:"blog",
    component:BlogComponent,
  },
  {
    path:"login",
    component: LoginComponent,
  },
  {
    path:"logout",
    component: LogoutComponent,
  },
  {
    path:"service",
    component: ServicesComponent,
  },
  {
    path:"contact",
    component: ContactComponent,
  },
  {
    path: "about",
    component: AboutComponent,
  },
  {
    path: "details",
    component: CustomerDetailComponent,
  }

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }