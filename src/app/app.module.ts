import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeComponent } from './home/home.component';
import { CenzorComponent } from './works/cenzor/cenzor.component';
import { UserlistComponent } from './works/userlist/userlist.component';
import { TasklistComponent } from './works/tasklist/tasklist.component';
import { HeaderComponent } from './components/header/header.component';
import { MenuComponent } from './components/menu/menu.component';
import { TableComponent } from './works/tasklist/table/table.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CenzorComponent,
    UserlistComponent,
    TasklistComponent,
    HeaderComponent,
    MenuComponent,
    TableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
