import { NgModule } from '@angular/core';
import { VmessageComponent } from './vmessage.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations:[VmessageComponent],
  exports:[VmessageComponent],
  imports:[CommonModule]
})
export class VmessageModule{}
