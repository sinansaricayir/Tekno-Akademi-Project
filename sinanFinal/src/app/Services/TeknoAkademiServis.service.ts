import { Uye } from '../Models/Uye';
import { Egitmen } from '../Models/Egitmen';
import { Kurs } from '../Models/Kurs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Kategori } from '../Models/Kategori';

@Injectable({
  providedIn: 'root'
})
export class TeknoAkademiServisService {

apiurl="https://localhost:44347/api/";

constructor(public http:HttpClient) { }

kategorilistele(){
  return this.http.get(this.apiurl+"kategoriliste");

}

kategoribyid(kursid:number){
  return this.http.get(this.apiurl+"kategoribyid/"+kursid)

}

kategoriekle(kat:Kategori){

return this.http.post(this.apiurl+"kategoriekle",kat);

}

kategoriduzenle(kat:Kategori){

  return this.http.put(this.apiurl+"kategoriduzenle",kat);
}
kategorisil(katid:number){

  return this.http.delete(this.apiurl+"kategorisil/"+katid);
}

kursliste(){

  return this.http.get(this.apiurl+"kursliste");
}

kurslistebykatid(katid:number){

  return this.http.get(this.apiurl+"kurslistebykatid/"+katid);
}

kursekle(kurs:Kurs){
return this.http.post(this.apiurl+"kursekle",kurs);
}

kursduzenle(kurs:Kurs){
  return this.http.put(this.apiurl+"kursduzenle",kurs);
}

kurssil(kursid:number){

  return this.http.delete(this.apiurl+"kurssil/"+kursid);
}

egitmenliste(){
  return this.http.get(this.apiurl+"egitmenliste");
}

egitmenekle(egitmen:Egitmen){

  return this.http.post(this.apiurl+"egitmenekle",egitmen);

}

egitmenduzenle(egitmen:Egitmen){
  return this.http.put(this.apiurl+"egitmenduzenle",egitmen);
}

egitmensil(egitmenid:number){
  return this.http.delete(this.apiurl+"egitmensil/"+egitmenid);
}

uyeliste(){
  return this.http.get(this.apiurl+"uyeliste");

}

uyebyid(uyeid:number){

  return this.http.get(this.apiurl+"uyebyid/"+ uyeid);

}

uyeekle(uye:Uye){
  return this.http.post(this.apiurl+"uyeekle",uye);

}

uyeduzenle(uye:Uye){
  return this.http.put(this.apiurl+"uyeduzenle",uye);

}

uyesil(uyeid:number){
  return this.http.delete(this.apiurl+"uyesil/"+uyeid);
}

girisYap(mail: string, sifre: string) {
  return this.http.get(this.apiurl + "girisyap/" + mail + "/" + sifre)
}

}