import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageRegistrationComponent } from './components/page-registration/page-registration.component';
import { NotfoundcomponentComponent } from './components/notfoundcomponent/notfoundcomponent.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PageLoginComponent } from './components/page-login/page-login.component';
import { PageHomeComponent } from './components/page-home/page-home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { AnimationComponent } from './components/animation/animation.component';
import { PageLoginMiddleComponent } from './components/page-login-middle/page-login-middle.component';
import { PostShowComponent } from './components/post-show/post-show.component';
import { AdditionalInfoComponent } from './components/additional-info/additional-info.component';


const routes: Routes = [
   {
     path:'',
     component:DashboardComponent, 
     pathMatch:'full'
   },
   {
     path:'home/:username', 
     component: PageHomeComponent
   },
   {
    path:'post', 
    component: PostShowComponent
  },
   {
     path: 'register',
     component: PageRegistrationComponent
   },
   {
     path: 'login', 
     component:PageLoginComponent
   },
   {
     path:'nav', 
     component: NavbarComponent
   },
   {
     path:'footer', 
     component:FooterComponent
    },
   {
     path: 'profile/:username',
     component:UserProfileComponent
   },
    {
      path:'info',
      component:AdditionalInfoComponent
    },
    {
      path:'anim',
      component:AnimationComponent
    },
   {
     path: '**', 
     component: NotfoundcomponentComponent
   },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    enableTracing: false,
    scrollPositionRestoration: 'enabled',
    // onSameUrlNavigation: "reload"
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
