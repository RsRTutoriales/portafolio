import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  productos: any[] = [];
  productos_filtrado: any[] = [];
  cargando_productos: boolean = true;

  constructor(private http: Http) { 

    this.cargar_productos();

  }

  public buscar_producto( termino: string ){

    if (this.productos.length === 0){

      this.cargar_productos().then( ()=>{
        this.filtrar_productos(termino);  
      });

    }else{
      this.filtrar_productos(termino);
    }

  }


  private filtrar_productos(termino:string){

    this.productos_filtrado = [];

    termino = termino.toLowerCase();

    this.productos.forEach( prod =>{

      if(prod.categoria.indexOf(termino) >=0 || prod.titulo.toLowerCase().indexOf(termino) >=0){
        this.productos_filtrado.push( prod );
      }

    })

  }


  public cargar_producto(id: string){

    return this.http.get(`https://paginawebgaleria.firebaseio.com/productos/${id}.json`)

  }

  public cargar_productos() {

    let promesa = new Promise((resolve, reject)=>{

      this.http.get('https://paginawebgaleria.firebaseio.com/productos_idx.json')
      .subscribe( res =>{
        this.cargando_productos = false;
        this.productos = res.json();
        resolve();
      });

    });

    return promesa;
  }

}
