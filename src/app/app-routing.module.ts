import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { PcPunchConfigurationComponent } from './components/main-page/pc-punch-configuration/pc-punch-configuration.component';
import { FunctionKeyComponent } from './components/main-page/function-key/function-key.component';

const routes: Routes = [
  { path: 'login', component: LoginPageComponent },
  { path: 'pc-punch-configuration', component: PcPunchConfigurationComponent },
  { path: 'function-key', component: FunctionKeyComponent },
  // redirect to `home` if there is no path
  {
    path: '',
    redirectTo: 'pc-punch-configuration',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
