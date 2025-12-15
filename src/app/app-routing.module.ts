import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { EventListComponent } from './pages/event-list/event-list.component';
import { EventDetailComponent } from './pages/event-detail/event-detail.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { CommunityListComponent } from './pages/community-list/community-list.component';
import { CommunityDetailComponent } from './pages/community-detail/community-detail.component';
import { CommunityCreateComponent } from './pages/community-create/community-create.component';
import { EventCreateComponent } from './pages/event-create/event-create.component';
import { EventEditComponent } from './pages/event-edit/event-edit.component';
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

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'events', component: EventListComponent },
  { path: 'events/create', component: EventCreateComponent },
  { path: 'events/:id', component: EventDetailComponent },
  { path: 'events/:id/edit', component: EventEditComponent },
  { path: 'communities', component: CommunityListComponent },
  { path: 'communities/create', component: CommunityCreateComponent },
  { path: 'communities/:id', component: CommunityDetailComponent },
  { path: 'admin/dashboard', component: AdminDashboardComponent },
  { path: 'help-center', component: HelpCenterComponent },
  { path: 'faqs', component: FaqsComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'guidelines', component: GuidelinesComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'careers', component: CareersComponent },
  { path: 'privacy-policy', component: PrivacyPolicyComponent },
  { path: 'terms-of-service', component: TermsOfServiceComponent },
  { path: '**', redirectTo: '/home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: false })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
