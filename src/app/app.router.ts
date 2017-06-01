import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Layouts
import { DashboardComponent } from './layouts/dashboard/dashboard.component';
import { PublicComponent } from './layouts/public/public.component';

// Pages
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { TeacherComponent } from './pages/teacher/teacher.component';
import { MarkAttendanceComponent } from './pages/teacher/components/mark-attendance/mark-attendance.component';
import { ViewClassDetailsComponent } from './pages/teacher/components/view-class-details/view-class-details.component';
import { ReportComponent } from './pages/teacher/components/report/report.component';
import { TchrProfileComponent } from './pages/teacher/components/tchr-profile/tchr-profile.component';
import { ClassesListComponent } from './pages/teacher/components/classes-list/classes-list.component';

export const router: Routes = [
    { path: '', component: PublicComponent,
      children: [
        { path: '', redirectTo: 'login', pathMatch: 'full' },
        { path: 'login', component: LoginComponent },
      ]
    },
    { path: 'dashboard', component: DashboardComponent,
      children: [
        { path: '', redirectTo: 'home', pathMatch: 'full' },
        { path: 'home', component: HomeComponent },
        { path: 'teacher',  component: HomeComponent },
        { path: 'teacher/mark-attendance',  component: MarkAttendanceComponent },
        { path: 'teacher/profile',  component: TchrProfileComponent },
        { path: 'teacher/class-details',  component:ViewClassDetailsComponent  },
        { path: 'teacher/report',  component: ReportComponent },
        { path: 'teacher/class',  component: ClassesListComponent },

      ]
    }
];

// export const routes: ModuleWithProviders = RouterModule.forRoot(router);
export const routes: ModuleWithProviders = RouterModule.forRoot(router, {useHash: true});
