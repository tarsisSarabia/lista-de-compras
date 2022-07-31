import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NomeDaListaComponent } from './nome-da-lista.component';

describe('NomeDaListaComponent', () => {
  let component: NomeDaListaComponent;
  let fixture: ComponentFixture<NomeDaListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NomeDaListaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NomeDaListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
