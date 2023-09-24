import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Inventory } from 'src/app/inventory';
import { RegistrationService } from 'src/app/registration.service';

@Component({
  selector: 'app-update-inventory',
  templateUrl: './update-inventory.component.html',
  styleUrls: ['./update-inventory.component.css']
})
export class UpdateInventoryComponent implements OnInit{

  id: number;
  inventory=new Inventory();
  ngOnInit() {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.regservice.getInventoryById(this.id).subscribe(data => {
      this.inventory = data;
    }, error => console.log(error));
  }

  constructor(private router:Router, 
    private activatedRoute:ActivatedRoute, 
    private regservice:RegistrationService){

  }
update(){
  this.regservice.updateInventoryFromRemote(this.id, this.inventory).subscribe( data =>{
    this.router.navigate(['/admin/inventories'])
  },
  error => console.log(error));

}
}
