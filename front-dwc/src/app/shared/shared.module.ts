import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PoModule } from '@po-ui/ng-components';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [CommonModule, PoModule, HttpClientModule],
  exports: [CommonModule, PoModule, HttpClientModule],
})
export class SharedModule {}
