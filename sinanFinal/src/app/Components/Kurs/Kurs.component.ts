import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { ToastrService } from 'ngx-toastr';
import { Uye } from 'src/app/Models/Uye';
import { Sonuc } from 'src/app/Models/Sonuc';
import { Kurs } from 'src/app/Models/Kurs';
import { KursDialogComponent } from '../Dialogs/kurs-dialog/kurs-dialog.component';
import { TeknoAkademiServisService } from 'src/app/Services/TeknoAkademiServis.service';


@Component({
  selector: 'app-Kurs',
  templateUrl: './Kurs.component.html',
  styleUrls: ['./Kurs.component.scss']
})
export class KursComponent implements OnInit {
  displayedColumns: string[] = ['kursId','kursAd','kursFiyat','kursIcerik','kursKategoriId','kursEgitmenId', 'Duzenle', 'Sil'];
  dataSource:any;

  kursdialogref:MatDialogRef<KursDialogComponent>

  kurs:Kurs;

  constructor(public service:TeknoAkademiServisService,public matdialog:MatDialog,public toastr:ToastrService) { }

  ngOnInit() {
    this.kursliste();
  }

  kursliste(){
    this.service.kursliste().subscribe((veri:Kurs[])=>{
    this.dataSource = new MatTableDataSource(veri);
    console.log(veri);
    })
  }


kursekle(){
  this.kurs=new Kurs();
  this.kursdialogref=this.matdialog.open(KursDialogComponent,{
    width:"300px",
    data:{
      kayit:this.kurs,
      islem:"ekle"
    }
  })
  
  this.kursdialogref.afterClosed().subscribe((veri:Kurs)=>{
    if(veri){
      this.service.kursekle(veri).subscribe((sonuc:Sonuc)=>{
        if(sonuc.Islem==true){
          this.toastr.success(sonuc.Mesaj);
          this.kursliste()
        }else{
          this.toastr.success(sonuc.Mesaj);
          this.kursliste()
        }
      })
    }
  })
}
  kursduzenle(kayit: Kurs) {
    this.kursdialogref = this.matdialog.open(KursDialogComponent, {
      width: "300px",
      data: {
        kayit: kayit,
        islem: "duzenle"
      }
    })
  
    this.kursdialogref.afterClosed().subscribe(d => {
      if (d) {
  
        kayit.kursAd = d.kursAd;
        kayit.kursFiyat = d.kursFiyat;
        kayit.kursIcerik = d.kursIcerik;
        kayit.kursKategoriId = d.kursKategoriId;
        kayit.kursEgitmenId = d.kursEgitmenId;

        console.log(kayit)
        this.service.kursduzenle(kayit).subscribe((s: Sonuc) => {
          this.dataSource.AlertUygula(s);
          if (s.Islem) {
            this.kursliste();
          }
          else{
            this.kursliste();
  
          }
        })
      }
    });
  }
  
  
  
  kurssil(kursid){
  this.service.kurssil(kursid).subscribe((sonuc:Sonuc)=>{
    this.toastr.success(sonuc.Mesaj);
    this.kursliste();
  })
  }
  }
  