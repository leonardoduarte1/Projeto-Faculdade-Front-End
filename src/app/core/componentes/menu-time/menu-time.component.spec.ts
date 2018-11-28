import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuTimeComponent } from './menu-time.component';

describe('MenuTimeComponent', () => {
  let component: MenuTimeComponent;
  let fixture: ComponentFixture<MenuTimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuTimeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
