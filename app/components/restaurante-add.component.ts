// Importar el núcleo de Angular
import {Component, onInit} from "angular2/core";
import {Router,RouteParams} from "angular2/router";
import {RestauranteService} from "../services/restaurante.service";
import {Restaurante} from "../model/Restaurante";


 
// Decorador component, indicamos en que etiqueta se va a cargar la plantilla
@Component({
    selector: 'restaurantes-add',
    templateUrl:"app/view/restaurante-add.html",
    providers: [RestauranteService]
    
})

// Clase del componente donde iran los datos y funcionalidades
export class RestauranteAddComponent implements onInit{
	public parametro;
	public errorMessage:string;
	public status;
	public restaurante: Restaurante;

constructor(
	private _restauranteService: RestauranteService,
	private _routeParams: RouteParams,
	private _router: Router
	){}

	ngOnInit(){
		console.log("Componente RestauranteAdd Cargando");
		this.restaurante = new Restaurante(this._routeParams.get("id"),
										  this._routeParams.get("nombre"),
										  this._routeParams.get("direccion")
										  this._routeParams.get("descripcion")
										  this._routeParams.get("precio")

			);
	}
}