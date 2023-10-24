import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {
  @Output() selectedParameters = new EventEmitter<any>()

  selectedCategory = 'general';
  selectedCountry = 'mx';

  categories: any[] = [
    {value: 'general', name: 'General'},
    {value: 'politics', name: 'Politics'},
    {value: 'business', name: 'Business'},
    {value: 'entertainment', name: 'Entertainment'},
    {value: 'health', name: 'Health'},
    {value: 'science', name: 'Science'},
    {value: 'technology', name: 'Technology'},
    {value: 'sports', name: 'Sports'},
  ]

  countries: any[] = [
    {value: 'mx', name: 'Mexico'},
    {value: 'ar', name: 'Argentina'},
    {value: 'au', name: 'Australia'},
    {value: 'br', name: 'Brazil'},
    {value: 'ca', name: 'Canada'},
    {value: 'cn', name: 'China'},
    {value: 'de', name: 'Germany'},
  ]


  contsructor() {  }

  ngOnInit(): void {  }

  searchNew() {
    const PARAMETERS = {
      category: this.selectedCategory,
      country: this.selectedCountry,
    }
    this.selectedParameters.emit(PARAMETERS)
  }


}
