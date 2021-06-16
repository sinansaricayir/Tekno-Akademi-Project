import { Component, OnInit } from '@angular/core';
import { Egitmen } from 'src/app/Models/Egitmen';
import { TeknoAkademiServisService } from 'src/app/Services/TeknoAkademiServis.service';

@Component({
  selector: 'app-Anasayfa',
  templateUrl: './Anasayfa.component.html',
  styleUrls: ['./Anasayfa.component.scss']
})
export class AnasayfaComponent implements OnInit {

  constructor(public service: TeknoAkademiServisService) { }

  egitmenler:Egitmen[];

  ngOnInit() { this.egitmenliste();
  }

  egitmenliste(){
    this.service.egitmenliste().subscribe((d:Egitmen[])=>{
      this.egitmenler=d;

    })
  }
  
}
