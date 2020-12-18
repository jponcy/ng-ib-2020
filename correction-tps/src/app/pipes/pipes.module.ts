import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { StartWordsPipe } from './start-words.pipe';

@NgModule({
  declarations: [
    StartWordsPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    StartWordsPipe
  ]
})
export class PipesModule { }
