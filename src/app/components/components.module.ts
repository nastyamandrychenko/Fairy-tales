import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './input/input.component';
import { MaterialAppModule } from '../ngmaterial.module';

@NgModule({
  declarations: [InputComponent],
  imports: [MaterialAppModule, CommonModule],
  exports: [InputComponent],
})
export class ComponentsModule {}
