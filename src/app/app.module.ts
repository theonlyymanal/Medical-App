import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { EquipeComponent } from './equipe/equipe.component';
import { CabinetComponent } from './cabinet/cabinet.component';
import { ContactComponent } from './contact/contact.component';
import { RdvComponent } from './rdv/rdv.component';
import { LoginComponent } from './login/login.component';
import { SurveyComponent } from './survey/survey.component';
import { Route } from '@angular/router';
import { TimeComponent } from './time/time.component';
import { SeparatorComponent } from './separator/separator.component';
import { CompteComponent } from './compte/compte.component';
import { PatientComponent } from './patient/patient.component';
import { PaymentComponent } from './payment/payment.component';
import { ContactpageComponent } from './contactpage/contactpage.component';
import { CalendarComponent } from './calendar/calendar.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AcceuilComponent,
    EquipeComponent,
    CabinetComponent,
    ContactComponent,
    RdvComponent,
    LoginComponent,
    SurveyComponent,
    TimeComponent,
    SeparatorComponent,
    CompteComponent,
    PatientComponent,
    PaymentComponent,
    ContactpageComponent,
    CalendarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
