import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { MaterialModule } from './material.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { OrganizerComponent } from './components/organizer/organizer.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { PcPunchConfigurationComponent } from './components/main-page/pc-punch-configuration/pc-punch-configuration.component';
import { FooterComponent } from './components/footer/footer.component';
import { LogoWelcomeComponent } from './components/login-page/logo-welcome/logo-welcome.component';
import { LoginFormComponent } from './components/login-page/login-form/login-form.component';

@NgModule({
  declarations: [
    AppComponent,
    OrganizerComponent,
    LoginPageComponent,
    PcPunchConfigurationComponent,
    FooterComponent,
    LogoWelcomeComponent,
    LoginFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
