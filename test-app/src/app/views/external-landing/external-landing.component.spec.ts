import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExternalLandingComponent } from './external-landing.component';

describe('ExternalLandingComponent', () => {
  let component: ExternalLandingComponent;
  let fixture: ComponentFixture<ExternalLandingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExternalLandingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExternalLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
