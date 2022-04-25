import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { PromisesComponent } from './components/promises/promises.component';
import { HeaderComponent } from './includes/header/header.component';
import { ObservableComponent } from './components/observable/observable.component';
import { AllCompComponent } from './components/observable/all-comp/all-comp.component';
import { FromEventComponent } from './components/observable/from-event/from-event.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    PromisesComponent,
    HeaderComponent,
    ObservableComponent,
    AllCompComponent,
    FromEventComponent,
    
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
