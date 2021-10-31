import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './input/input.component';
import { MaterialAppModule } from '../ngmaterial.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [InputComponent],
  imports: [MaterialAppModule, CommonModule, ReactiveFormsModule],
  exports: [InputComponent],
})
export class ComponentsModule {}
