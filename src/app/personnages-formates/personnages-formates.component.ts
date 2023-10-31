import { Component , OnInit} from '@angular/core';

@Component({
  selector: 'app-personnages-formates',
  templateUrl: './personnages-formates.component.html',
  styleUrls: ['./personnages-formates.component.css']
})
export class PersonnagesFormatesComponent implements OnInit {
  tabPersonnages = [
    { nom: 'laugh', image: 'assets/rire.jpg', nombres_abonnes: 44, majeur: true },
    { nom: 'lovely', image: 'assets/amour.jpg', nombres_abonnes: 16, majeur: true },
    { nom: 'blink', image: 'assets/bb.jpg', nombres_abonnes: 12, majeur: false }
  ];

  constructor() { }

  ngOnInit() {
  }

  sAbonner(candidat: { nom: any; }) {
    console.log(`Vous vous êtes abonné à ${candidat.nom}.`);
  }

  calculerNombreMajeurs() {
    return this.tabPersonnages.filter(candidat => candidat.majeur).length;
  }
}
