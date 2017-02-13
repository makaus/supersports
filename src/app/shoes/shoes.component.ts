import { Component, OnInit } from '@angular/core';
import { IShoe } from './shoes';
import { ShoeDataService } from '../shared/shoe-data.service';
@Component({
	selector: 'shoes',
	moduleId: module.id,
	templateUrl: 'shoes.component.html'
	
})

export class ShoesComponent implements OnInit{
	shoes:IShoe[];

	constructor(private shoeDataService: ShoeDataService){}

	ngOnInit(){
		this.shoes = this.shoeDataService.getShoeData();
	}
	
}