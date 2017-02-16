import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

class Contact{
	contactname: string;
	contactemail: string;
	message: string;
}

@Component({
	selector: 'contact',
	moduleId: module.id,
	templateUrl: 'contact.component.html'
	
})

export class ContactComponent implements OnInit{
	model:Contact = new Contact();
	hasBeenSubmitted: boolean;

	ngOnInit(){
		this.hasBeenSubmitted = false;
	}

	send(form:NgForm, event:Event){
		event.preventDefault();
		this.hasBeenSubmitted = true;
		console.log(form.value.contactname);
	}
}