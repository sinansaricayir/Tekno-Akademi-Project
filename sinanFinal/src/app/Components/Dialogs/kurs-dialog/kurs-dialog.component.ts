import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Kurs } from 'src/app/Models/Kurs';

@Component({
  selector: 'app-kurs-dialog',
  templateUrl: './kurs-dialog.component.html',
  styleUrls: ['./kurs-dialog.component.css']
})
export class KursDialogComponent implements OnInit {

  kurs:Kurs;

  form:FormGroup;

  dialogBaslik:string;

  islem:string;

  constructor(
    public formBuilder:FormBuilder,
    public dialogRef:MatDialogRef<KursDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any
  ) {
    this.islem=data.islem,
    this.kurs=data.kayit
    
    if(this.islem=="ekle"){
      this.dialogBaslik="Kurs Ekle"
    }else{
      this.dialogBaslik="Kurs Düzenle"
    }

    this.form=this.kursForm();

   }

   kursForm(){
     return this.formBuilder.group({
       kursAd:[this.kurs.kursAd,[Validators.required]],
       kursFiyat:[this.kurs.kursFiyat,[Validators.required]],
       kursIcerik:[this.kurs.kursIcerik,[Validators.required]],
       kursEgitmenId:[this.kurs.kursEgitmenId,[Validators.required]],
       kursKategoriId:[this.kurs.kursKategoriId,[Validators.required]]
     });

   }

  ngOnInit() {
  }

}