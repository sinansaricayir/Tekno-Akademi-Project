import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Uye } from 'src/app/Models/Uye';
import { TeknoAkademiServisService } from 'src/app/Services/TeknoAkademiServis.service';


@Component({
  selector: 'app-Giris',
  templateUrl: './Giris.component.html',
  styleUrls: ['./Giris.component.scss']
})
export class GirisComponent implements OnInit {
  girisuye: Uye;

  constructor(
    public service: TeknoAkademiServisService,
    public router:Router
  ) {

  }



  ngOnInit() {
  }


  girisYap(email, sifre) {
    this.service.girisYap(email, sifre).subscribe((uye: Uye) => {
      if(uye!=null){
        this.girisuye = uye;
        localStorage.setItem("yetki",uye.uyeYetki);
        localStorage.setItem("uid",uye.uyeId.toString());
        this.router.navigate([''])
      }
     

    })

  }

}

