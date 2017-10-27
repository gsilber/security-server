import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExternalregisterComponent } from './externalregister.component';

describe('ExternalregisterComponent', () => {
  let component: ExternalregisterComponent;
  let fixture: ComponentFixture<ExternalregisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExternalregisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExternalregisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
