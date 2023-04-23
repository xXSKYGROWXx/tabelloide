import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatTableModule} from '@angular/material/table';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TableComponent } from './table/table.component';
import { HttpClientModule } from '@angular/common/http';
import {Component, Inject} from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent
  ],
  imports: [
    MatTableModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    Component, 
    Inject,
    MatDialog, 
    MAT_DIALOG_DATA, 
    MatDialogRef
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
