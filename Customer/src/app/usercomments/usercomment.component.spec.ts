import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsercommentComponent } from './usercomment.component';

describe('UsercommentComponent', () => {
  let component: UsercommentComponent;
  let fixture: ComponentFixture<UsercommentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsercommentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsercommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
