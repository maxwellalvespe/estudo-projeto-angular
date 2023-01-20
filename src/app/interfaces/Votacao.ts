import { SimpleChange } from "@angular/core";

export interface Votacao{
    idUsuario:string,
    idPublicacao:string,
    opcao:['SIM','NAO']
}