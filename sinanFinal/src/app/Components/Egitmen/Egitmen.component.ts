import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { ToastrService } from 'ngx-toastr';
import { Sonuc } from 'src/app/Models/Sonuc';
import { TeknoAkademiServisService } from 'src/app/Services/TeknoAkademiServis.service';
import { EgitmenDialogComponent } from '../Dialogs/egitmen-dialog/egitmen-dialog.component';
import { Egitmen } from 'src/app/Models/Egitmen';

@Component({
  selector: 'app-Egitmen',
  templateUrl: './Egitmen.component.html',
  styleUrls: ['./Egitmen.component.scss']
})
export class EgitmenComponent implements OnInit {
  
  displayedColumns: string[] = ['egitmenId','egitmenAd','egitmenSoyad','egitmenBrans','egitmenOzgecmis','egitmenFotograf', 'Duzenle', 'Sil'];
  dataSource:any;

  egitmendialogref:MatDialogRef<EgitmenDialogComponent>

  egitmen:Egitmen;

  constructor(public service:TeknoAkademiServisService,public matdialog:MatDialog,public toastr:ToastrService) { }

  ngOnInit() {
    this.egitmenliste();
  }

  egitmenliste(){
    this.service.egitmenliste().subscribe((veri:Egitmen[])=>{
    this.dataSource = new MatTableDataSource(veri);
    console.log(veri);
    })
  }


egitmenekle(){
  this.egitmen=new Egitmen();
  this.egitmendialogref=this.matdialog.open(EgitmenDialogComponent,{
    width:"300px",
    data:{
      kayit:this.egitmen,
      islem:"ekle"
    }
  })
  
  this.egitmendialogref.afterClosed().subscribe((veri:Egitmen)=>{
    if(veri){
      this.service.egitmenekle(veri).subscribe((sonuc:Sonuc)=>{
        if(sonuc.Islem==true){
          this.toastr.success(sonuc.Mesaj);
          this.egitmenliste()
        }else{
          this.toastr.success(sonuc.Mesaj);
          this.egitmenliste()
        }
      })
    }
  })
}

  egitmenduzenle(kayit: Egitmen) {
    this.egitmendialogref = this.matdialog.open(EgitmenDialogComponent, {
      width: "300px",
      data: {
        kayit: kayit,
        islem: "duzenle"
      }
    })
  
    this.egitmendialogref.afterClosed().subscribe(d => {
      if (d) {
  
        kayit.egitmenAd = d.egitmenAd;
        kayit.egitmenSoyad = d.egitmenSoyad;
        kayit.egitmenBrans = d.egitmenBrans;
        kayit.egitmenOzgecmis = d.egitmenOzgecmis;
        kayit.egitmenFotograf = d.egitmenFotograf;

        console.log(kayit)
        this.service.egitmenduzenle(kayit).subscribe((s: Sonuc) => {
          this.dataSource.AlertUygula(s);
          if (s.Islem) {
            this.egitmenliste();
          }
          else{
            this.egitmenliste();
  
          }
        })
      }
    });
  }
  
  
  
  egitmensil(egitmenId){
  this.service.egitmensil(egitmenId).subscribe((sonuc:Sonuc)=>{
    this.toastr.success(sonuc.Mesaj);
    this.egitmenliste();
  })
  }
  }
  
