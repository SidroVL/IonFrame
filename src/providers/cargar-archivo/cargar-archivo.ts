import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the CargarArchivoProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CargarArchivoProvider {

  constructor(public http: HttpClient) {
    console.log('Hello CargarArchivoProvider Provider');
  }

  
}
interface Frame{
  url:string;
  titulo: string;
  autor: string;
  localizacion: string;
  copyright: boolean;
  key?:string;
}