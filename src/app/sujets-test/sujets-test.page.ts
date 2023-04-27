import { Component, OnInit } from '@angular/core';
import {NavController} from '@ionic/angular'
import { getElement } from 'ionicons/dist/types/stencil-public-runtime';

@Component({
  selector: 'app-sujets-test',
  templateUrl: './sujets-test.page.html',
  styleUrls: ['./sujets-test.page.scss'],
})
export class SujetsTestPage implements OnInit {

  isMenuOpen: boolean = false;

  constructor( public nc:NavController) { }

  ngOnInit() {
  }
  menu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  panier() {
    this.nc.navigateForward('/sujets-payes')
  }

  loadMore(event:any) {
  // Effectuer une requête AJAX pour charger plus de données
  // Ajouter les données nouvellement chargées à votre contenu existant

  // Terminer le chargement
  event.target.complete();
}
}
