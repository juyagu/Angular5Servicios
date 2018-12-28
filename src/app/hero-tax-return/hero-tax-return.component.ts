import { Component, OnInit,Output,EventEmitter,Input } from '@angular/core';
import { HeroTaxReturn }        from './../hero';
import { HeroTaxReturnService } from './../hero-tax-return.service';

@Component({
  selector: 'app-hero-tax-return',
  templateUrl: './hero-tax-return.component.html',
  styleUrls: ['./hero-tax-return.component.css'],
  providers: [ HeroTaxReturnService ]
})
export class HeroTaxReturnComponent implements OnInit {
  message = '';

  @Output() close = new EventEmitter<void>();
  
  constructor(private heroTaxReturnService: HeroTaxReturnService) { }
  
  get taxReturn(): HeroTaxReturn {
    return this.heroTaxReturnService.taxReturn;
  }

  @Input()
  set taxReturn (htr: HeroTaxReturn) {
    this.heroTaxReturnService.taxReturn = htr;
  }

  onClose()  { this.close.emit(); };
  
  onSaved() {
    this.flashMessage('Saved');
    this.heroTaxReturnService.saveTaxReturn();
  }
  onCanceled()  {
    this.flashMessage('Canceled');
    this.heroTaxReturnService.restoreTaxReturn();
  };

  flashMessage(msg: string) {
    this.message = msg;
    setTimeout(() => this.message = '', 500);
  }


  ngOnInit() {
  }

}
