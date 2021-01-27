import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './pages/page.component';
import { AboutComponent } from './pages/about/about.component';
import { SkillsComponent } from './pages/skills/skills.component';
import { EducationComponent } from './pages/education/education.component';
import { ContactUsComponent } from './pages/contact/contact.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { IntroComponent } from './pages/intro/intro.component';

const routes: Routes = [
  {
    path: '',
    component: ProfileComponent,
    pathMatch: 'full',
  },
  {
    path: 'intro',
    component: IntroComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },

  {
    path: 'contact',
    component: ContactUsComponent,
  },

  {
    path: 'education',
    component: EducationComponent,
  },

  {
    path: 'projects',
    component: ProjectsComponent,
  },

  {
    path: 'skills',
    component: SkillsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
