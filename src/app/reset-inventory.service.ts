import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResetInventory } from './reset-inventory';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ResetInventoryService {

  constructor(private http:HttpClient) { }

  public getResetInventoriesFromRemote():Observable<ResetInventory[]>{
    return this.http.get<ResetInventory[]>('http://localhost:8213/getresetqty');
  }

  public addResetQtyFromRemote(resetInventory:ResetInventory):Observable<any>{
    return this.http.post<any>('http://localhost:8213/saveresetqty',resetInventory);
  }

  public searchResetFromRemote(resetInventory:ResetInventory):Observable<any>{
    return this.http.post<any>('http://localhost:8213/search',resetInventory);
  }
}
