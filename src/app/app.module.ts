import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { routes } from './app.router';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MdCardModule,
         MdCheckboxModule, 
         MdButtonModule, 
         MdIconModule, 
         MdToolbarModule,
         MdInputModule,
         MdSidenavModule,
         MdListModule,
         MdGridListModule,
         MdChipsModule,
        } from '@angular/material';

// Layouts
import { AppComponent } from './app.component';
import { DashboardComponent } from './layouts/dashboard/dashboard.component';
import { PublicComponent } from './layouts/public/public.component';

// Pages
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { TeacherComponent } from './pages/teacher/teacher.component';

// Services
import { StudentsService } from './services/students.service';
import { AuthService } from './services/auth.service';

// Components
import { DashboardSidebarComponent } from './layouts/components/dashboard-sidebar/dashboard-sidebar.component';
import { MarkAttendanceComponent } from './pages/teacher/components/mark-attendance/mark-attendance.component';
import { ViewClassDetailsComponent } from './pages/teacher/components/view-class-details/view-class-details.component';
import { ReportComponent } from './pages/teacher/components/report/report.component';
import { TchrProfileComponent } from './pages/teacher/components/tchr-profile/tchr-profile.component';
import { ClassesListComponent } from './pages/teacher/components/classes-list/classes-list.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    DashboardSidebarComponent,
    PublicComponent,
    LoginComponent,
    HomeComponent,
    TeacherComponent,
    MarkAttendanceComponent,
    ViewClassDetailsComponent,
    ReportComponent,
    TchrProfileComponent,
    ClassesListComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    routes,
    BrowserAnimationsModule,
    MdButtonModule,MdCardModule,MdIconModule,MdToolbarModule,MdInputModule,MdSidenavModule,MdListModule,
    MdGridListModule,MdChipsModule,
  ],
  providers: [
    StudentsService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
