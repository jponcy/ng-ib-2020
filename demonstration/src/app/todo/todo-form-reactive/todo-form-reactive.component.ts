import { Component, EventEmitter, Output } from '@angular/core';
import { AbstractControl, FormBuilder, Validators } from '@angular/forms';

import { Todo } from '../models';

@Component({
  selector: 'app-todo-form-reactive',
  templateUrl: './todo-form-reactive.component.html',
  styleUrls: ['./todo-form-reactive.component.scss']
})
export class TodoFormReactiveComponent {

  @Output()
  create = new EventEmitter<Todo>();

  // Creation manuelle du formulaire (il vaut mieux utiliser le form-builder).
  // FormGroup (objet), FormArray (tableau), FormControl (valeur atomique) <|-- AbstractControl.
  // form = new FormGroup({
  //   name: new FormControl(null, [Validators.required, Validators.minLength(3)]),
  //   finished: new FormControl(false),
  //   endedAt: new FormControl()
  // });

  form = this.fb.group({
    // name: this.fb.control(null, [Validators.required, Validators.minLength(3)]),
    name: [null, [Validators.required, Validators.minLength(3)]],
    finished: false,
    endedAt: null
  });

  constructor(private readonly fb: FormBuilder) { }

  get name(): AbstractControl {
    return this.form.controls.name;
  }

  onSubmit(event: Event): void {
    event.preventDefault();

    this.create.emit(this.form.value);
    this.form.patchValue({ name: null, finished: false, endedAt: null });
  }
}
