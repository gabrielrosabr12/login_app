import { Routes } from '@angular/router';
import { Login } from './pages/login/login';
import { Signup } from './pages/signup/signup';
import { Home } from './pages/home/home';
import { ReportOccurrence } from './pages/report-occurrence/report-occurrence';
import { Logout } from './components/logout/logout';

export const routes: Routes = [
  { path: 'login', component: Login },
  { path: 'signup', component: Signup},
  { path: 'home', component: Home},
  {path: 'report_occurrence', component: ReportOccurrence},
  {path: 'logout',component:Logout}
];
