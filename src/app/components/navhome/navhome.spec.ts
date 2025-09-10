import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Navhome } from './navhome';

describe('Navhome', () => {
  let component: Navhome;
  let fixture: ComponentFixture<Navhome>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Navhome]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Navhome);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
