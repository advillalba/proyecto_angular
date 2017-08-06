// Importar el núcleo de Angular
import {Component, onInit} from "angular2/core";
import {ROUTER_DIRECTIVES, RouteConfig, Router} from "angular2/router";
import {RestauranteService} from "../services/restaurante.service";
import {Restaurante} from "../model/Restaurante";


 
// Decorador component, indicamos en que etiqueta se va a cargar la plantilla
@Component({
    selector: 'restaurantes-list',
    templateUrl:"app/view/restaurantes-list.html",
    providers: [RestauranteService]
    
})

// Clase del componente donde iran los datos y funcionalidades
export class RestaurantesListComponent implements onInit{
	public titulo:string = "Listado de restaurantes";
	public restaurantes: Restaurante[];
	public status:string;
	public errorMessage;
	constructor (private _restauranteService: RestauranteService){}

	ngOnInit(){
		this.getRestaurantes();
		console.log("restaurantes-list component cargado");}

	getRestaurantes(){
		let box_restaurantes = <HTMLElement>document.querySelector("#restaurantes-list .loading");
		box_restaurantes.style.visibility = "visible";
		this._restauranteService.getRestaurantes()
								.subscribe(
									result => {
										this.restaurantes = result.data;
										this.status = result.status;

										if(this.status !== "success"){alert("Error en el servidor")};
										box_restaurantes.style.display = "none";
									};
									error => {
										this.errorMessage = <any>error;
										if(this.errorMessage !== null) {
											console.log(this.errorMessage);
											alert("Error en la petición");
										}
									}
									)
	}
	
}
