import { HomeComponent } from './module/pages/home/home.component';
import { ManageReportsComponent } from './module/pages/manage-reports/manage-reports.component';
import { LoginSignupComponent } from './module/pages/login-signup/login-signup.component';
import { Routes } from '@angular/router';


export const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
    },
    {
        path: 'home',
        component: HomeComponent,
    },
    {
        path: 'admin/manage-reports',
        component: ManageReportsComponent,
    },
    {
        path: 'user/login',
        component: LoginSignupComponent,
    },
    {
        path: 'user/register',
        component: LoginSignupComponent,
    },
];