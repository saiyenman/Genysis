import { Component, OnInit } from '@angular/core';
import { RgService } from '../_services/rg.service';
import { Rg } from '../_models/rg';
import { filter, flatMap } from 'rxjs/operators'
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-resources',
  templateUrl: './edit-resources.component.html',
  styleUrls: ['./edit-resources.component.scss']
})
export class EditResourcesComponent implements OnInit {
  resources : Rg[];

  constructor(private rgService: RgService, private router: Router) { }

  ngOnInit() {
    this.getAllResources();
  }

  getAllResources(): void {
    this.rgService.getAll().
    subscribe(resourcesData =>
      this.resources = resourcesData
    ); 
  }

  deleteRes(index) {
    this.rgService.deleteResource(index).subscribe(res => {
     this.getAllResources()
    })
  }

  editRes(index) {
    
  }

  infoRessource(info) {
    this.router.navigate(['/admin/details'], { queryParams: { id: info } });
  }

}
 