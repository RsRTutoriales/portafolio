import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit {

  termino: string = undefined;

  constructor(private route:ActivatedRoute, private _ps:ProductosService) { 

  route.params.subscribe( parametros => {
  
      this.termino = parametros['termino'];

      _ps.buscar_producto(this.termino)

  })

  }

  ngOnInit() {
  }

}
