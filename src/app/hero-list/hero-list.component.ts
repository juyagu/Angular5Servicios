import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { Hero, HeroTaxReturn } from './../hero';
import { HeroesServiceService }       from './../heroes-service.service';


@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css']
})
export class HeroListComponent implements OnInit {
  heroes: Observable<Hero[]>;
  selectedTaxReturns: HeroTaxReturn[] = [];

  constructor(private heroesService: HeroesServiceService) {
    this.heroes = heroesService.getHeroes();
   }

  ngOnInit() {
  }

  showTaxReturn(hero: Hero) {
    this.heroesService.getTaxReturn(hero)
    .subscribe(htr => {
      // show if not currently shown
      if (!this.selectedTaxReturns.find(tr => tr.id === htr.id)) {
        this.selectedTaxReturns.push(htr);
      }
    });
  }

  closeTaxReturn(ix: number) {
    this.selectedTaxReturns.splice(ix, 1);
  }

}
