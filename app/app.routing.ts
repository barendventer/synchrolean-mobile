import { NgModule } from '@angular/core';
import { NativeScriptRouterModule } from 'nativescript-angular/router';
import { Routes } from '@angular/router';

import { TaskListComponent } from '~/pages/tasks/task-list/task-list.component';
import { TaskFormComponent } from '~/pages/tasks/task-form/task-form.component';
import { TaskDetailComponent } from '~/pages/tasks/task-detail/task-detail.component';
import { LoginMainComponent } from '~/pages/account/login-main/login-main.component';
import { LoginFormComponent } from '~/pages/account/login-form/login-form.component';
import { MembersComponent } from '~/pages/teams/members/members.component';
import { TeamListComponent } from '~/pages/teams/team-list/team-list.component';
import { TeamFormComponent } from '~/pages/teams/team-form/team-form.component';
import { MetricsComponent } from '~/pages/metrics/metrics.component';

const routes: Routes = [
  { path: '', redirectTo: '/task-list', pathMatch: 'full' },
  { path: 'task-list', component: TaskListComponent },
  { path: 'task-form', component: TaskFormComponent },
  { path: 'task-detail/:id', component: TaskDetailComponent },
  { path: 'task-edit/:id', component: TaskFormComponent },
  { path: 'login-main', component: LoginMainComponent },
  { path: 'login-form', component: LoginFormComponent },
  { path: 'Members', component: MembersComponent},
  { path: 'Members/:id', component: MembersComponent},
  { path: 'teams', component: TeamListComponent},
  { path: 'team-form', component: TeamFormComponent},
  { path: 'metrics' , component: MetricsComponent}
];

@NgModule({
  imports: [NativeScriptRouterModule.forRoot(routes)],
  exports: [NativeScriptRouterModule]
})
export class AppRoutingModule {}
