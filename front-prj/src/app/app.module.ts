import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AppRoutes } from './app.routes';
import { HttpClientModule  } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { HomeService } from './home/home.service';
import { HeaderComponent } from './header/header.component';
import { ItemSearchComponent } from './item-search/item-search.component';
import { ItemSelectedComponent } from './item-selected/item-selected.component';
import { HelperService } from './shared/helper.service';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    HomeComponent,
    HeaderComponent,
    ItemSearchComponent,
    ItemSelectedComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutes,
    HttpClientModule
  ],
  providers: [
    HomeService,
    HelperService
  ],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
