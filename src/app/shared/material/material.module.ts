import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatRippleModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    MatProgressSpinnerModule,
    MatSlideToggleModule,
    MatIconModule,
    MatToolbarModule,
    FormsModule,
    ReactiveFormsModule,
    MatRippleModule,
    RouterModule,
    MatChipsModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
  ],
  exports: [
    HttpClientModule,
    MatProgressSpinnerModule,
    MatSlideToggleModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    MatRippleModule,
    RouterModule,
    MatChipsModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
  ],
})
export class MaterialModule {}
