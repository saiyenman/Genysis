import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopbarComponent } from './topbar/topbar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { PermisComponent } from './permis/permis.component';
import { DemandepermisComponent } from './demandepermis/demandepermis.component';
import { ContactComponent } from './contact/contact.component';
import { ProjetsComponent } from './projets/projets.component';
import { AddprojectComponent } from './addproject/addproject.component';
import { EventComponent } from './event/event.component';
import { AddeventComponent } from './addevent/addevent.component';
import { AdminComponent } from './admin/admin.component';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ErrorInterceptor } from '../app/_helpers/error.interceptor';
import { JwtInterceptor } from '../app/_helpers/jwt.interceptor';
import { InstitutionComponent } from './institution/institution.component';
import { InstitutionDetailComponent } from './institution-detail/institution-detail.component';
import { RgComponent } from './rg/rg.component';
import { RgMarineComponent } from './rg-marine/rg-marine.component';
import { RgAlimentaireComponent } from './rg-alimentaire/rg-alimentaire.component';
import { RgForetComponent } from './rg-foret/rg-foret.component';
import { RgAnimaleComponent } from './rg-animale/rg-animale.component';
import { RgMicroComponent } from './rg-micro/rg-micro.component';
import { InstitutiondetailcontactComponent } from './institutiondetailcontact/institutiondetailcontact.component';
import { InstitutiondetailprofileComponent } from './institutiondetailprofile/institutiondetailprofile.component';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { GestionResssourcesComponent } from './gestion-resources/gestion-resssources.component';
import { EditResourcesComponent } from './edit-resources/edit-resources.component';
import { UserComponent } from './user/user.component';
import { FileUploadModule } from 'ng2-file-upload';
import { ReglementationComponent } from './reglementation/reglementation.component';
import { ListDemandesComponent } from './list-demandes/list-demandes.component';
import { ResDetailsComponent } from './res-details/res-details.component';



@NgModule({
  declarations: [
    AppComponent,
    TopbarComponent,
    NavbarComponent,
    AboutComponent,
    HomeComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    PermisComponent,
    DemandepermisComponent,
    ContactComponent,
    ProjetsComponent,
    AddprojectComponent,
    EventComponent,
    AddeventComponent,
    AdminComponent,
    InstitutionComponent,
    InstitutionDetailComponent,
    RgComponent,
    RgMarineComponent,
    RgAlimentaireComponent,
    RgForetComponent,
    RgAnimaleComponent,
    RgMicroComponent,
    InstitutiondetailcontactComponent,
    InstitutiondetailprofileComponent,
    GestionResssourcesComponent,
    EditResourcesComponent,
    UserComponent,
    ReglementationComponent,
    ListDemandesComponent,
    ResDetailsComponent 
   ],
  imports: [
    BrowserModule,
    FileUploadModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule,
    FormsModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
