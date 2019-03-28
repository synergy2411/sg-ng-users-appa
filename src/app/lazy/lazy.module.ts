import { LAZY_ROUTES } from './lazy.routes';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IAmLazyComponent } from './i-am-lazy/i-am-lazy.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(LAZY_ROUTES)
  ],
  declarations: [IAmLazyComponent]
})
export class LazyModule { }
