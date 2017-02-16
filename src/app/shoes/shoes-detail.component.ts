import { Component, OnInit, NgModule } from '@angular/core';
import { IShoe } from './shoes';
import { Router, ActivatedRoute } from '@angular/router';
import { ShoeDataService } from '../shared/shoe-data.service';

@Component({
	moduleId: module.id,
	templateUrl : 'shoes-detail.component.html'
})

export class ShoeDetailComponent{
	shoeid:number;
	shoe: IShoe;

	constructor(private _route: ActivatedRoute,
				private _router: Router,
				private _shoeDataService: ShoeDataService){

	}

	ngOnInit(){
		this.shoeid = +this._route.snapshot.params['id'];
		this.shoe = this._shoeDataService.getShoeDataById(this.shoeid);
	}

	
}