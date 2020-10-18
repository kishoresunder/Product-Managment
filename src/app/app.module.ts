import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ProductListComponent } from './products/product-list.component';

@NgModule({  // we tell angular that the class is a module by using @ngmodule decorator
  declarations: [  //the module takes in array
    AppComponent,  // delcaring all the components which belongs to this module
    ProductListComponent
  ],
  imports: [
    BrowserModule, // importing external moduls
    FormsModule
  ],
  bootstrap: [AppComponent]  // statup component -> it should have the selector we use in index.html
})
export class AppModule { } // we are telling angular that this is a class
