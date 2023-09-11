import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { MessagesService } from '../messages.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit{
  // hero: Hero = {
  //   id: 1,
  //   name: 'Windstorm'
  // }
  heroes:Hero[] = [];
  selectedHero?: Hero;

  constructor(private heroService: HeroService, private messageService: MessagesService) {}

  ngOnInit(): void {
    this.getHeroes();
  }

  onSelect( hero:Hero ):void{
    this.selectedHero = hero;
    this.messageService.add('Selezionato eroe ' + hero.name)
    console.log(this.selectedHero);
  }

  getHeroes(): void {
    this.heroService.getHeroes()
        .subscribe(heroesFromService => this.heroes = heroesFromService);
  }
}
