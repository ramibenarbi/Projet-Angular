import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Acceuil1Component } from './acceuil1/acceuil1.component';
import { Acceuil2Component } from './acceuil2/acceuil2.component';
import { AccueilComponent } from './accueil/accueil.component';
import { LayoutComponent } from './layout/layout.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { Historique1Component } from './historique1/historique1.component';
import { Historique2Component } from './historique2/historique2.component';
import { HistoriqueeComponent } from './historiquee/historiquee.component';
import { AuthGuard } from './auth.guard';
import { HomeComponent } from './home/home.component';
import { TypeComponent } from './type/type.component';
import { Type1Component } from './type1/type1.component';
import { Type2Component } from './type2/type2.component';
import { Type3Component } from './type3/type3.component';
import { Month1Component } from './month1/month1.component';
import { Month3Component } from './month3/month3.component';
import { Month2Component } from './month2/month2.component';
const routes: Routes = [

{ path:'layout',component:LayoutComponent, children:[
  { path : 'type' , component : TypeComponent,canActivate: [AuthGuard]},
  { path : 'type1' , component : Type1Component,canActivate: [AuthGuard]},
  { path : 'type2' , component : Type2Component,canActivate: [AuthGuard]},
  { path : 'type3' , component : Type3Component,canActivate: [AuthGuard]},
  { path : 'efficiency1' , component : AccueilComponent,canActivate: [AuthGuard]},
  { path : 'efficiency2' , component : Acceuil1Component,canActivate: [AuthGuard]},
  { path : 'efficiency3' , component : Acceuil2Component,canActivate: [AuthGuard]},
  { path : 'historique1' , component : HistoriqueeComponent,canActivate: [AuthGuard]},
  { path : 'historique2' , component : Historique1Component,canActivate: [AuthGuard]},
  { path : 'historique3' , component : Historique2Component,canActivate: [AuthGuard]},
  { path : 'month2' , component : Month2Component,canActivate: [AuthGuard]},
  { path : 'month3' , component : Month3Component,canActivate: [AuthGuard]},
  { path : 'month1' , component : Month1Component,canActivate: [AuthGuard]},
]},
{ path : 'login' ,component : LoginComponent},
{ path : 'register' ,component : RegisterComponent},
{ path : '' ,component : HomeComponent},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
