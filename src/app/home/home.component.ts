import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  data: any[] = [];
  //data: any{} = {};
  films: any[] = [];
  selectPeli: any = null;
  characters: any[] = [];
  constructor(private apiService: ApiService){}

  ngOnInit(): void {
    this.llenarData();
  }

  llenarData(){
    this.apiService.getData().subscribe( data =>{
      this.data = data.results;
      console.log(this.data);
      
    })

  }
  onSelecPeli(film: any): void {
    this.selectPeli = film;
    this.loadCharacters();
  }
  loadCharacters(): void {
    this.characters = [];
    if (this.selectPeli) {
      const characterUrls = this.selectPeli.characters;
      characterUrls.forEach((url: string) => {
        this.apiService.getCharacter(url).subscribe((character: any) => {
          this.characters.push(character);
        });
      });
    }
  }
}
