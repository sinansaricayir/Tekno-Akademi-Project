import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {HttpClientModule} from '@angular/common/http';
import { MaterialModule } from './material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './Components/home/home.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { KategoriComponent } from './Components/Kategori/Kategori.component';
import { UyeComponent } from './Components/Uye/Uye.component';
import { EgitmenComponent } from './Components/Egitmen/Egitmen.component';
import { AnasayfaComponent } from './Components/Anasayfa/Anasayfa.component';
import { KategoriDialogComponent } from './Components/Dialogs/kategori-dialog/kategori-dialog.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { KursDialogComponent } from './Components/Dialogs/kurs-dialog/kurs-dialog.component';
import { KursComponent } from './Components/Kurs/Kurs.component';
import { EgitmenDialogComponent } from './Components/Dialogs/egitmen-dialog/egitmen-dialog.component';
import { FormGroup, FormGroupDirective, FormsModule, } from '@angular/forms';
import { UyeDialogComponent } from './Components/Dialogs/uye-dialog/uye-dialog.component';
import { GirisComponent } from './Components/Giris/Giris.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    KategoriComponent,
    UyeComponent,
    EgitmenComponent,
    AnasayfaComponent,
    KategoriDialogComponent,
    KursDialogComponent,
    KursComponent,
    EgitmenDialogComponent,
    UyeDialogComponent,
    GirisComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    ReactiveFormsModule,
    ToastrModule.forRoot()

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
