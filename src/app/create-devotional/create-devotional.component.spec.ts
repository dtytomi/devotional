import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateDevotionalComponent } from './create-devotional.component';

describe('CreateDevotionalComponent', () => {
  let component: CreateDevotionalComponent;
  let fixture: ComponentFixture<CreateDevotionalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateDevotionalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateDevotionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
