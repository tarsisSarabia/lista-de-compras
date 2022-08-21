import { Component, OnInit, Input, Output, OnChanges, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-product-panel',
  templateUrl: './product-panel.component.html',
  styleUrls: ['./product-panel.component.css']
})
export class ProductPanelComponent implements OnInit,  OnChanges {
  @Input() value: number = 0;
  @Output() donationEvent = new EventEmitter<boolean>();
  backgroundColor = 'green';

  constructor() {}

  ngOnChanges(): void {
    if (this.value > 10)
      setTimeout(() => {
        this.donationEvent.emit(true);
      }, 3000);
  }

  ngOnInit(): void {}

  onDblClickBalance(color: string) {
    this.backgroundColor = color;
  }

  getBackgroundColor() {
    return this.backgroundColor;
  }

}
