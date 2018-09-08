import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { heroSwitchComponents } from './hero-switch.components';
import { UnlessDirective } from './unless.directive';
import {CreatingOwnDirective} from './creating-own-directive.component';
import { StyleExampleComponent } from './app.NgStyleDirective.component';
import { ClassAsStringComponent } from './app.BindingStringNgClass.component';
import { ClassAsArrayComponent } from './app.BindingNgClassAsArray.component';
import { ClassAsObjectComponent } from './app.BindingNgclassAsObject.component';

@NgModule({
  imports: [ BrowserModule, FormsModule ],
  declarations: [
    AppComponent,
    heroSwitchComponents,
    UnlessDirective,
    CreatingOwnDirective,
    StyleExampleComponent,
    ClassAsStringComponent,
    ClassAsArrayComponent,
    ClassAsObjectComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
