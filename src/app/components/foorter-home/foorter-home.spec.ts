import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoorterHome } from './foorter-home';

describe('FoorterHome', () => {
  let component: FoorterHome;
  let fixture: ComponentFixture<FoorterHome>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FoorterHome]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FoorterHome);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
