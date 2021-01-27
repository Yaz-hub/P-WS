import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SnotifyModule, SnotifyService, ToastDefaults } from 'ng-snotify';
import { ProfileComponent } from './page.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { IntroComponent } from './intro/intro.component';
import { AboutComponent } from './about/about.component';

import { SkillsComponent } from './skills/skills.component';
import { EducationComponent } from './education/education.component';
import { ContactUsComponent } from './contact/contact.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { ProjectsComponent } from './projects/projects.component';

@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule, SnotifyModule, NgxSpinnerModule],
  declarations: [ProfileComponent, HeaderComponent, FooterComponent, IntroComponent, AboutComponent, SkillsComponent, EducationComponent, ContactUsComponent, ProjectsComponent],
  providers: [{ provide: 'SnotifyToastConfig', useValue: ToastDefaults }, SnotifyService],
})
export class ProfileModule {}
