import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ResponseComponent } from './response/response.component';


const appRoutes: Routes = [
  //{ path: 'poll/:id', component: ResponseComponent }
]
@NgModule({
  declarations: [
    AppComponent,
    ResponseComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes
    ),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
