import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { PoTemplatesModule } from '@po-ui/ng-templates';

@NgModule({
  declarations: [LoginComponent],
  imports: [CommonModule, PoTemplatesModule],
  exports: [LoginComponent],
})
export class LoginModule {}
