import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NyComponentComponent } from './ny-component.component';

describe('NyComponentComponent', () => {
  let component: NyComponentComponent;
  let fixture: ComponentFixture<NyComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NyComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NyComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
