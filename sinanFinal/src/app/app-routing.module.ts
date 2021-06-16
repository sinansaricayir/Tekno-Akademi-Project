import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AnasayfaComponent } from './Components/Anasayfa/Anasayfa.component';
import { EgitmenComponent } from './Components/Egitmen/Egitmen.component';
import { HomeComponent } from './Components/home/home.component';
import { KategoriComponent } from './Components/Kategori/Kategori.component';
import { UyeComponent } from './Components/Uye/Uye.component';
import { KursComponent } from './Components/Kurs/Kurs.component';
import { GirisComponent } from './Components/Giris/Giris.component';
import { AdminGuard } from './admin.guard';



const routes: Routes = [
  {path:"",component:AnasayfaComponent},
  {path:"kategoriler",component:KategoriComponent,canActivate:[AdminGuard]},
  {path:"egitmenler",component:EgitmenComponent,canActivate:[AdminGuard]},
  {path:"uyeler",component:UyeComponent,canActivate:[AdminGuard]},
  {path:"kurslar",component:KursComponent,canActivate:[AdminGuard]},
  {path:"girisyap",component:GirisComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
