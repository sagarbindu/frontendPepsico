import { Component } from '@angular/core';

import {  Router } from '@angular/router';

import { RegistrationService } from 'src/app/registration.service';

import { Inventory } from 'src/app/inventory';

import { User } from 'src/app/user';

@Component({

  selector: 'app-user-inventory',

  templateUrl: './user-inventory.component.html',

  styleUrls: ['./user-inventory.component.css']

})

export class UserInventoryComponent {

  user=new User();

  //u=''

  inventories:Inventory[];

ngOnInit() {

   this.getInventories();

}



constructor(private router:Router, private regservice:RegistrationService){



}

public getInventories(){

this.regservice.getInventoriesFromRemote().subscribe(data=>this.inventories=data);

}



public placeOrder(id:number){

  this.router.navigate(['/user/placeorder',id]);

}



}

