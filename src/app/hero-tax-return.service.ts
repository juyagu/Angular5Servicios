import { Injectable } from '@angular/core';
import { HeroTaxReturn } from './hero';
import { HeroesServiceService } from './heroes-service.service';
@Injectable({
  providedIn: 'root'
})
export class HeroTaxReturnService {
  private currentTaxReturn: HeroTaxReturn;
  private originalTaxReturn: HeroTaxReturn;

  constructor(private heroService: HeroesServiceService) { }
  set taxReturn (htr: HeroTaxReturn) {
    this.originalTaxReturn = htr;
    this.currentTaxReturn  = htr.clone();
  }

  get taxReturn (): HeroTaxReturn {
    return this.currentTaxReturn;
  }

  restoreTaxReturn() {
    this.taxReturn = this.originalTaxReturn;
  }

  saveTaxReturn() {
    this.taxReturn = this.currentTaxReturn;
    this.heroService.saveTaxReturn(this.currentTaxReturn).subscribe();
  }
}
