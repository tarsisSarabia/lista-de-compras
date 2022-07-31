import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimeiraListaComponent } from './primeira-lista.component';

describe('PrimeiraListaComponent', () => {
  let component: PrimeiraListaComponent;
  let fixture: ComponentFixture<PrimeiraListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrimeiraListaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrimeiraListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
