import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Inventory } from 'src/app/inventory';
import { RegistrationService } from 'src/app/registration.service';

@Component({
  selector: 'app-add-inventory',
  templateUrl: './add-inventory.component.html',
  styleUrls: ['./add-inventory.component.css']
})
export class AddInventoryComponent implements OnInit {
  errorMsg='';
  inventory=new Inventory();
  
  ngOnInit(){
  
  }

  constructor(private regservice:RegistrationService,private router:Router){

  }

  add(){
    this.regservice.addInventoryFromRemote(this.inventory).subscribe(
      data=>{
        console.log(data);
        this.router.navigate(['/admin/inventories'])
      },
      error=>{
        console.log('error');
        this.errorMsg=error.error.message;
      }
    )

  }

}
