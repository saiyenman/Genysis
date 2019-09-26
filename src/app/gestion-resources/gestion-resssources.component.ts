import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RgService } from '../_services/rg.service';
import { Rg } from '../_models/rg';

@Component({
  selector: 'app-gestion-resssources',
  templateUrl: './gestion-resssources.component.html',
  styleUrls: ['./gestion-resssources.component.scss']
})
export class GestionResssourcesComponent implements OnInit {
  addResourceForm: FormGroup;
  submitted = false;
  resource = new Rg()
  id: number

  fileData: File = null;
  previewUrl:any = null;
  fileUploadProgress: string = null;
  uploadedFilePath: string = null;



  constructor(private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private rgService: RgService) {
      if (this.route.snapshot.params['id'] != 'add') {
        this.id = this.route.snapshot.params['id'];}
     }

  ngOnInit() {
      console.log('On init')
      this.rgService.getSingleResource(this.id).subscribe(result => {
        this.resource = result
      })
      console.log(this.resource)
  }


  onSubmit(value) {
    const resPayload = {
      nomCommunFr: value.nomCommunFr,
      nomCommunAr: value.nomCommunAr,
      nomScientifique: value.nomScientifique,
      description: value.description,
      morphologie: value.morphologie,
      formuleChimique: value.formuleChimique,
      structure: value.structure,
      environnement: value.environnement,
      transmission: value.transmission,
      cycleVie: value.cycleVie
    }

    this.rgService.addResource(resPayload).subscribe( data =>
      console.log(data),
      error => console.log(error)
    )
    }

    fileProgress(fileInput: any) {
      this.fileData = <File>fileInput.target.files[0];
      this.preview();
    }

    preview() {
      // Show preview 
      var mimeType = this.fileData.type;
      if (mimeType.match(/image\/*/) == null) {
        return;
      }
   
      var reader = new FileReader();      
      reader.readAsDataURL(this.fileData); 
      reader.onload = (_event) => { 
        this.previewUrl = reader.result; 
      }
  }
   

}
