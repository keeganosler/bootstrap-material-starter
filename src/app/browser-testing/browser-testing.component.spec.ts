import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowserTestingComponent } from './browser-testing.component';

describe('BrowserTestingComponent', () => {
  let component: BrowserTestingComponent;
  let fixture: ComponentFixture<BrowserTestingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrowserTestingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BrowserTestingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
