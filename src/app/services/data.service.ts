import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private storedData: any = null;  // Variable privada para almacenar los datos

  constructor() { }

  //Metodo para almacenar los datos
  setData(data:any){
      this.storedData = data;
  }

  getData(): any {
    return this.storedData;
  }
}
