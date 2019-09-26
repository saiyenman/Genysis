import { Component, OnInit } from '@angular/core';
import { DemandeService } from '../_services/demande.service';

@Component({
  selector: 'app-demandepermis',
  templateUrl: './demandepermis.component.html',
  styleUrls: ['./demandepermis.component.scss']
})
export class DemandepermisComponent implements OnInit {
  fileName: String

  constructor(private demandeService: DemandeService) { }

 
ngOnInit() {
}

onSubmit(value) {
  const resPayload = {
    titre: value.titre,
    email: value.email,
    description: value.description,
    type: value.titre
  }
  console.log(resPayload)

  this.demandeService.addResource(resPayload).subscribe( data =>
      console.log(data),
      error => console.log(error)
)
}

fileEvent(fileInput: HTMLInputEvent) {
  let file = fileInput.target.files[0];
  this.fileName = file.name;
  console.log(this.fileName)
}
}
