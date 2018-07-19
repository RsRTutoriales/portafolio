import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  productos: any[] = [];
  cargando_productos: boolean = true;

  constructor(private http: Http) { 

    this.cargar_productos();

  }

  public cargar_productos() {
  
    //if (this.productos.length === 0){
      
      this.http.get('https://paginawebgaleria.firebaseio.com/productos_idx.json')
      .subscribe( res =>{
        console.log(res.json());
        this.productos = res.json();
        this.cargando_productos = false;
      });

    //}
  
  }

}
