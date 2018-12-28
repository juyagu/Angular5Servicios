import { Injectable } from '@angular/core';

import { Hero, HeroTaxReturn } from './hero';
import { Observable, Observer } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroesServiceService {
  heroes: Hero[] = [
    { id: 1, name: 'RubberMan', tid: '082-27-5678'},
    { id: 2, name: 'Tornado',   tid: '099-42-4321'}
  ];
  heroTaxReturns: HeroTaxReturn[] = [
    new HeroTaxReturn(10, this.heroes[0], 35000),
    new HeroTaxReturn(20, this.heroes[1], 1250000)
  ];

  getHeroes(): Observable<Hero[]> {
    return new Observable<Hero[]>((observer: Observer<Hero[]>) => {
      observer.next(this.heroes);
      observer.complete();
    });
  }

  getTaxReturn(hero: Hero): Observable<HeroTaxReturn> {
    return new Observable<HeroTaxReturn>((observer: Observer<HeroTaxReturn>) => {
      const htr = this.heroTaxReturns.find(t => t.hero.id === hero.id);
      observer.next(htr || new HeroTaxReturn(0, hero));
      observer.complete();
    });
  }

  saveTaxReturn(heroTaxReturn: HeroTaxReturn): Observable<HeroTaxReturn> {
    /*
    An object conforming to the Observer interface is usually given to the observable.subscribe(observer) method, and the Observable will call the Observer's next(value) method to provide notifications. A well-behaved Observable will call an Observer's complete() method exactly once or the Observer's error(err) method exactly once, as the last notification delivered.
    */
    return new Observable<HeroTaxReturn>((observer: Observer<HeroTaxReturn>) => {
      const htr = this.heroTaxReturns.find(t => t.id === heroTaxReturn.id);
      /*Buscar un heroTaxReturn en base al id. Si lo encuentra lo mergea, de lo contrario lo agrega.*/
      if (htr) {
        heroTaxReturn = Object.assign(htr, heroTaxReturn); // demo: mutate
      } else {
        this.heroTaxReturns.push(heroTaxReturn);
      }
      observer.next(heroTaxReturn);
      observer.complete();
    });
  }

  constructor() { }
}
