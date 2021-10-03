import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewDevotionalComponent } from './view-devotional.component';

describe('ViewDevotionalComponent', () => {
  let component: ViewDevotionalComponent;
  let fixture: ComponentFixture<ViewDevotionalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewDevotionalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewDevotionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
