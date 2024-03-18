import { NgModule } from '@angular/core';
import { IssuesComponent } from './issues.component';
import { MatOption, MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';

const MATERIAL_MODULES = [
  MatButtonModule,
  MatInputModule,
  MatFormFieldModule,
  MatOption,
  MatSelectModule,
];
@NgModule({
  declarations: [IssuesComponent],
  imports: [CommonModule, ...MATERIAL_MODULES],
  exports: [IssuesComponent],
})
export class IssuesModule {}
