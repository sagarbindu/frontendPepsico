import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router,RouterModule } from '@angular/router';
import { RegistrationService } from 'src/app/registration.service';
import { User } from 'src/app/user';
import { Inventory } from 'src/app/inventory';
import { ResetInventoryService } from 'src/app/reset-inventory.service';
import { ResetInventory } from 'src/app/reset-inventory';
@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit{

  resetInventories:ResetInventory[];
  ngOnInit() {
     this.getResetInventoriesFromRemote();
  }

  constructor(private resetInvService:ResetInventoryService,private route:Router){

  }

  public getResetInventoriesFromRemote(){
    this.resetInvService.getResetInventoriesFromRemote().subscribe(
      data=>{
        console.log(data);
        this.resetInventories=data;
      },
      error=>{
        console.log('error');
        
      }
    )

  }

  public addReset(){
    this.route.navigate(['/admin/addresetqty']);
  }

  public searchReset(){
    this.route.navigate(['/admin/search']);
  }


}
