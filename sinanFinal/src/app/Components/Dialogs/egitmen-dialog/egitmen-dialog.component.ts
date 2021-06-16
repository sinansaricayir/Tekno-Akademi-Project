import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Egitmen } from 'src/app/Models/Egitmen';

@Component({
  selector: 'app-egitmen-dialog',
  templateUrl: './egitmen-dialog.component.html',
  styleUrls: ['./egitmen-dialog.component.scss']
})
export class EgitmenDialogComponent implements OnInit {

  egitmen:Egitmen;

  form:FormGroup;

  dialogBaslik:string;

  islem:string;

  constructor(
    public formBuilder:FormBuilder,
    public dialogRef:MatDialogRef<EgitmenDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any
  ) {
    this.islem=data.islem,
    this.egitmen=data.kayit
    
    if(this.islem=="ekle"){
      this.dialogBaslik="Eğitmen Ekle"
    }else{
      this.dialogBaslik="Eğitmen Düzenle"
    }

    this.form=this.egitmenForm();

   }

   egitmenForm(){
     return this.formBuilder.group({
       egitmenAd:[this.egitmen.egitmenAd,[Validators.required]],
       egitmenSoyad:[this.egitmen.egitmenSoyad,[Validators.required]],
       egitmenBrans:[this.egitmen.egitmenBrans,[Validators.required]],
       egitmenOzgecmis:[this.egitmen.egitmenOzgecmis,[Validators.required]],
       egitmenFotograf:[this.egitmen.egitmenFotograf,[Validators.required]]
     });

   }

  ngOnInit() {
  }

}