import { Component, OnInit } from '@angular/core';
import { Demande } from '../_models/demande';
import { DemandeService } from '../_services/demande.service';

@Component({
  selector: 'app-list-demandes',
  templateUrl: './list-demandes.component.html',
  styleUrls: ['./list-demandes.component.scss']
})
export class ListDemandesComponent implements OnInit {
  demandes : Demande[];
  valides = [false]

  constructor(private demandeService: DemandeService) { }

  ngOnInit() {
    this.getAllDemandes();
  }

  getAllDemandes() {
    this.demandeService.getAll().
    subscribe( demandesData =>
      this.demandes = demandesData
    );
  }

  valider(index) {
    this.valides[index]= true
  }

}
