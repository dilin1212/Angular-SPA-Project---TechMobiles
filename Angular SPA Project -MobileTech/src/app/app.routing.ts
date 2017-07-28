import { Routes } from '@angular/router';

import { AuthenticatedUserComponent } from './authenticated-user/authenticated-user.component';
import { HomeComponent } from './home/home.component';
import { BrandListComponent } from './brand-list/brand-list.component';
import { BrandDetailComponent } from './brand-detail/brand-detail.component';
import { ContactComponent } from './contact/contact.component';
import { SignInComponent } from '../fw/users/sign-in/sign-in.component';
import { RegisterUserComponent } from '../fw/users/register-user/register-user.component';
import { AuthGuard } from './services/auth-guard.service';

export const appRoutes: Routes = [  
  { path: 'signin', component: SignInComponent },
  { path: 'register', component: RegisterUserComponent },
  { path: 'authenticated', component: AuthenticatedUserComponent, canActivate: [AuthGuard],
    children: [
      { path: '', canActivateChild: [AuthGuard],
        children: [
          { path: '', redirectTo: 'home', pathMatch: 'full' },
          { path: 'home', component: HomeComponent },
          { path: 'brand-list/:count', component: BrandListComponent },
          { path: 'brand-detail', component: BrandDetailComponent },
          { path: 'contact', component: ContactComponent },
        ] }
    ] },
  { path: '', component: SignInComponent },
  { path: '**', component: SignInComponent }
];