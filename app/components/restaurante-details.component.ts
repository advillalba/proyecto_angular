// Importar el núcleo de Angular
import {Component, onInit} from "angular2/core";
import {RouteParams} from "angular2/router";
import {RestauranteService} from "../services/restaurante.service";
import {Restaurante} from "../model/Restaurante";


 
// Decorador component, indicamos en que etiqueta se va a cargar la plantilla
@Component({
    selector: 'restaurantes-detail',
    templateUrl:"app/view/restaurante-detail.html",
    providers: [RestauranteService]
    
})

// Clase del componente donde iran los datos y funcionalidades
export class RestauranteDetailsComponent implements onInit{
	public parametro;
	public errorMessage:string;
	public status;
	public restaurante: Restaurante[];

constructor(
	private _restauranteService: RestauranteService,
	private _routeParams: RouteParams
	){}

	ngOnInit(){
		this.parametro = this._routeParams.get("id");
		this.getRestaurante();
	}

	getRestaurante() {
		let id = this._routeParams.get("id");
		this._restauranteService.getRestaurante(id).subscribe(
			response => {
					this.restaurante = response.data;
					this.status = response.status;
					if(this.status !== "success"){alert("Error en el servidor")};
										
						},
			error => {
				this.errorMessage = <any>error;
				if(this.errorMessage !== null) {
					console.log(this.errorMessage);
					alert("Error en la petición");
					}
				}
			);
	}

}