import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarPartidasComponent } from './buscar-partidas.component';

describe('BuscarPartidasComponent', () => {
  let component: BuscarPartidasComponent;
  let fixture: ComponentFixture<BuscarPartidasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuscarPartidasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscarPartidasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
