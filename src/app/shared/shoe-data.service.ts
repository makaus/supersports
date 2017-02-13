import { Injectable } from '@angular/core';
import { SHOEDATA } from './data';
import { IShoe } from '../shoes/shoes';

@Injectable()

export class ShoeDataService{
	getShoeData() : IShoe[]{
		return SHOEDATA;
	}

	getShoeDataById(shoeid: number){
		return SHOEDATA.find(r => r.id == shoeid)
	}


}