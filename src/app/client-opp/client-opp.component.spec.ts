import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientOppComponent } from './client-opp.component';

describe('ClientOppComponent', () => {
  let component: ClientOppComponent;
  let fixture: ComponentFixture<ClientOppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientOppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientOppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
