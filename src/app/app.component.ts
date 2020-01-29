import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {ResponseService} from './response.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Api-Mail';

  constructor(private responseService: ResponseService, private activatedRoute : ActivatedRoute, 
    private location: Location ){
      
    }

    responses={
      option_id:'',
      poll_id: ''
    };

     ngOnInit(){
  setTimeout(() => {
    this.activatedRoute.queryParams.
    subscribe(params => {
     //  this.responses = params
     // const poll_id = params['id'];
     // const options_id =params['options_id'];
     // console.log(poll_id);
     // console.log(options_id);
     this.responses.option_id = params.option_id
     this.responses.poll_id = params.poll_id
     // this.responses.suggestions = params.suggestions        // this.responses = params
    
      this.responseService.recordResponse(this.responses).subscribe(response => {
       console.log(response);       
     })
   
   }) 
  }, 1000);
 

    }
}
