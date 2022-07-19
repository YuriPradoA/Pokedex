import { IfStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { PokemonsService } from 'src/app/shared/pokemons.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  pokemonList: any[] = []
  modal: boolean = false;
  loading: boolean = false;

  //   {
  //     nome: 'Bulbasaur',
  //     tipo: ['grass', 'poison'],
  //     numero: '001',
  //     imagem: 'assets/imagens/bulba.png'
  //   },
  //   {
  //     nome: 'Charmander',
  //     tipo: ['fire'],
  //     numero: '002',
  //     imagem: 'assets/imagens/charmander.svg'
  //   },
  //   {
  //     nome: 'Ghastly',
  //     tipo: ['ghost'],
  //     numero: '052',
  //     imagem: 'assets/imagens/ghastly.png'
  //   }
  // ]


  constructor(private pokemonService: PokemonsService) {
  }

  ngOnInit(): void {
    this.getPokemons()
  }

  getPokemons() {
    for(let i = 1; i <= 150; i++) {
      this.loading=true;
      this.pokemonService.getPokemon(i).subscribe(resposta => {
        this.pokemonList.push(resposta)
        this.orderList()
        setTimeout(() => {
          
          this.loading=false;
        },2000);
      })      
    }
    console.log(this.pokemonList)
  }
  
  orderList() {
    this.pokemonList = this.pokemonList.sort((a,b) => a.order - b.order);
  }
  
  openPokemon() {
    this.modal=true;
  }
}
