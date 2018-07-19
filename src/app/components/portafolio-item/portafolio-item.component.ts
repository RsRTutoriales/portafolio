import { ProductosService } from './../../services/productos.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-portafolio-item',
  templateUrl: './portafolio-item.component.html',
  styles: []
})
export class PortafolioItemComponent implements OnInit {

  producto: any = undefined;
  cod: string = undefined;

  constructor( private route:ActivatedRoute, public _ps: ProductosService ) { 

    route.params.subscribe(parametros =>{

      _ps.cargar_producto(parametros['id'])
      .subscribe( res => {

        this.producto  = res.json();
        this.cod = parametros['id'];
        
        console.log(this.producto);

      })
    })
  }

  ngOnInit() {
  }

}
