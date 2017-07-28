import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { FwModule } from '../fw/fw.module';
import { HomeComponent } from './home/home.component';
import { appRoutes } from './app.routing';
import { BrandDetailComponent } from './brand-detail/brand-detail.component';
import { BrandListComponent } from './brand-list/brand-list.component';
import { ContactComponent } from './contact/contact.component';
import { AuthenticatedUserComponent } from './authenticated-user/authenticated-user.component';
import { UserService } from './services/user.service';
import { UserApi } from '../fw/users/users-api';
import { AuthGuard } from './services/auth-guard.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BrandDetailComponent,
    BrandListComponent,
    ContactComponent,
    AuthenticatedUserComponent,
 
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    FwModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
UserService,
    { provide: UserApi, useExisting: UserService },
    AuthGuard,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
