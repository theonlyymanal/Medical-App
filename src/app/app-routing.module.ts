import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { CabinetComponent } from './cabinet/cabinet.component';
import { LoginComponent } from './login/login.component';
import { RdvComponent } from './rdv/rdv.component';
import { EquipeComponent } from './equipe/equipe.component';
import { ContactComponent } from './contact/contact.component';
import { SurveyComponent } from './survey/survey.component';
import { TimeComponent } from './time/time.component';
import { SeparatorComponent } from './separator/separator.component';
import { CompteComponent } from './compte/compte.component';
import { PatientComponent } from './patient/patient.component';
import { PaymentComponent } from './payment/payment.component';
import { ContactpageComponent } from './contactpage/contactpage.component';
import { CalendarComponent } from './calendar/calendar.component';

const routes: Routes = [
  {path: '', redirectTo: '/acceuil', pathMatch: 'full' }, 
  {path: 'acceuil', component: AcceuilComponent },
  {path:'cabinet', component:CabinetComponent},
  {path:'equipe', component:EquipeComponent},
  {path:'contact', component:ContactComponent},
  {path:'rdv', component:RdvComponent},
  {path:'survey', component:SurveyComponent},
  {path:'time' , component:TimeComponent},
  {path:'separator' , component:SeparatorComponent},
  {path: 'compte' , component:CompteComponent},
  {path: 'patient', component:PatientComponent},
  {path: 'payment', component:PaymentComponent},
  {path: 'contactpage',component:ContactpageComponent},
  {path: 'calendar', component:CalendarComponent},

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
