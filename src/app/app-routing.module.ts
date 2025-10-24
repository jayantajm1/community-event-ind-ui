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

const routes: Routes = [
  { path: '', component: HomeComponent },
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
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
