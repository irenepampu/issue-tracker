import { NgModule } from '@angular/core';
import { AddIssuesComponent } from './add-issues.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule, MatIconButton } from '@angular/material/button';
import { MatOption } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

const MATERIAL_MODULES = [
  MatButtonModule,
  MatInputModule,
  MatFormFieldModule,
  MatOption,
  MatSelectModule,
];

@NgModule({
  declarations: [AddIssuesComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,

    ...MATERIAL_MODULES,
  ],
  exports: [AddIssuesComponent],
})
export class AddIssuesModule {}
