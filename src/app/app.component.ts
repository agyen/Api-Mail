import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {ResponseService} from './response.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Api-Mail';

  constructor(private responseService: ResponseService, private activatedRoute : ActivatedRoute, 
    private location: Location ){}

    responses;

    ngOnInit(){
      this.activatedRoute.queryParams.subscribe(params => {
        // const poll_id = params['id'];
        // const options_id =params['options_id'];
        // console.log(poll_id);
        // console.log(options_id);
        this.responses = params
      }) 

      this.responseService.recordResponse(this.responses).subscribe(response => {
        console.log(response);
        
      })
    }
}
