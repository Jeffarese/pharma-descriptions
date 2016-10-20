import { Component } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private http: Http) {
    this.http.post(
      'http://swbdm.portalfarma.com/WebServiceBDM.asmx',
      {
        IdVerifUser1: 'cHJ1ZWJhaG9zcGl0YWxzYWx1ZA',
        user: '4usFs3lLXbT1i',
        IdService: 'MynzhqfLJtX3',
        parametros: '6543'
      }
    ).subscribe((data)=> {
      console.log(data);
    })
  }
}
