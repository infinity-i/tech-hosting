import { PendingComponent } from './pending/pending.component';
import { AdminComponent } from './admin/admin.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBlogComponent } from './add-blog/add-blog.component';
import { BlogsComponent } from './blogs/blogs.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { AuthGuard } from './auth.guard';
import { ViewblogComponent } from './viewblog/viewblog.component';

const routes: Routes = [{path:'',component:WelcomeComponent},
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'home',component:HomeComponent, 
  children: [
    {
      path:'',component:BlogsComponent
    },
    {
      path:'blogs',component:BlogsComponent
    },
    {
      path:'addblog',
      // canActivate : [AuthGuard],
      component:AddBlogComponent
    },
    {
      path:'viewblog',component:ViewblogComponent,

    },
    
    {
      path:'back',component:HomeComponent
    },

  ]},
  {path:'admin',component:AdminComponent},
  {path:'pending',component:PendingComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
