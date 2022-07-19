import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class PokemonsService {

  constructor(private http:HttpClient) { }
  getPokemon(pokeNumber:number) {
    return this.http.get<any>('https://pokeapi.co/api/v2/pokemon/'+pokeNumber)
  }
}
