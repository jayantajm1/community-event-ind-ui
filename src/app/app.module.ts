import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { EventListComponent } from './pages/event-list/event-list.component';
import { EventDetailComponent } from './pages/event-detail/event-detail.component';
import { NgxSpinnerShimComponent } from './components/ngx-spinner/ngx-spinner.component';
import { PToastShimComponent } from './components/p-toast/p-toast.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { CommunityListComponent } from './pages/community-list/community-list.component';
import { CommunityDetailComponent } from './pages/community-detail/community-detail.component';
import { CommunityCreateComponent } from './pages/community-create/community-create.component';
import { EventCreateComponent } from './pages/event-create/event-create.component';
import { EventEditComponent } from './pages/event-edit/event-edit.component';
import { CommentListComponent } from './components/comment-list/comment-list.component';
import { AdminDashboardComponent } from './pages/admin-dashboard/admin-dashboard.component';
import { HelpCenterComponent } from './pages/help-center/help-center.component';
import { FaqsComponent } from './pages/faqs/faqs.component';
import { BlogComponent } from './pages/blog/blog.component';
import { GuidelinesComponent } from './pages/guidelines/guidelines.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { ContactComponent } from './pages/contact/contact.component';
import { CareersComponent } from './pages/careers/careers.component';
import { PrivacyPolicyComponent } from './pages/privacy-policy/privacy-policy.component';
import { TermsOfServiceComponent } from './pages/terms-of-service/terms-of-service.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    EventListComponent,
    EventDetailComponent,
    NgxSpinnerShimComponent,
    PToastShimComponent,
    LoginComponent,
    SignupComponent,
    ProfileComponent,
    CommunityListComponent,
    CommunityDetailComponent,
    CommunityCreateComponent,
    EventCreateComponent,
    EventEditComponent,
    CommentListComponent,
    AdminDashboardComponent,
    HelpCenterComponent,
    FaqsComponent,
    BlogComponent,
    GuidelinesComponent,
    AboutUsComponent,
    ContactComponent,
    CareersComponent,
    PrivacyPolicyComponent,
    TermsOfServiceComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
