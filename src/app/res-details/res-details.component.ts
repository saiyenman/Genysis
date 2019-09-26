import { Component, OnInit } from '@angular/core';
import { RgService } from '../_services/rg.service';
import { ActivatedRoute } from '@angular/router';
import { Rg } from '../_models/rg';

@Component({
  selector: 'app-res-details',
  templateUrl: './res-details.component.html',
  styleUrls: ['./res-details.component.scss']
})
export class ResDetailsComponent implements OnInit {
  resource: Rg
  id: number
  constructor(private resService: RgService, private route: ActivatedRoute ) {
      this.id = this.route.snapshot.params['id'];
   }
   
  ngOnInit() {
    this.getRessource(this.id)
    console.log(this.resource.description)
  }

  getRessource(index) {
    this.resService.getSingleResource(index).subscribe(res=> {
      this.resource = res
    })
  }



}
