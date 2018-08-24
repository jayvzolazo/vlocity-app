import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonsSidebarComponent } from './persons-sidebar.component';

describe('PersonsSidebarComponent', () => {
  let component: PersonsSidebarComponent;
  let fixture: ComponentFixture<PersonsSidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonsSidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonsSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
