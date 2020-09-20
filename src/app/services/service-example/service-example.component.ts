import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../countries.service';
import { Country } from '../country.model';

@Component({
  selector: 'app-service-example',
  templateUrl: './service-example.component.html',
  styleUrls: ['./service-example.component.scss']
})
export class ServiceExampleComponent implements OnInit {

  countries : Country[]

  constructor(private countriesService: CountriesService) { }

  ngOnInit() {
    this.countriesService.getCountries().subscribe(data => {
      this.countries = data;
    } )
    
  }

}
