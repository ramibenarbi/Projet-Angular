import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { app, auth, database, firestore, functions, messaging, storage } from 'firebase/app';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilComponent } from './accueil/accueil.component';
import { LayoutComponent } from './layout/layout.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AngularFirestoreModule} from 'angularfire2/firestore';
import { AngularFireAuthModule} from 'angularfire2/auth';
import { environment} from '../environments/environment';
import { AngularFireModule } from 'angularfire2';
// for AngularFireDatabase
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireDatabase} from 'angularfire2/database';
import { ChartsModule } from 'ng2-charts';
import { HistoriqueeComponent } from './historiquee/historiquee.component';
import { AuthGuard} from './auth.guard';
import { HomeComponent } from './home/home.component';
import { Acceuil1Component } from './acceuil1/acceuil1.component';
import { Acceuil2Component } from './acceuil2/acceuil2.component';
import { Historique1Component } from './historique1/historique1.component';
import { Historique2Component } from './historique2/historique2.component';
import { TypeComponent } from './type/type.component';
import { Type1Component } from './type1/type1.component';
import { Type2Component } from './type2/type2.component';
import { Type3Component } from './type3/type3.component';
import { Month1Component } from './month1/month1.component';
import { Month2Component } from './month2/month2.component';
import { Month3Component } from './month3/month3.component';

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    LayoutComponent,
    LoginComponent,
    RegisterComponent,
    HistoriqueeComponent,
    HomeComponent,
    Acceuil1Component,
    Acceuil2Component,
    Historique1Component,
    Historique2Component,
    TypeComponent,
    Type1Component,
    Type2Component,
    Type3Component,
    Month1Component,
    Month2Component,
    Month3Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
   AngularFireDatabaseModule,
   ChartsModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent,]
})
export class AppModule { }
