import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoFormTplDrivenFormComponent } from './todo-form-tpl-driven-form.component';

describe('TodoFormTplDrivenFormComponent', () => {
  let component: TodoFormTplDrivenFormComponent;
  let fixture: ComponentFixture<TodoFormTplDrivenFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoFormTplDrivenFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoFormTplDrivenFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
