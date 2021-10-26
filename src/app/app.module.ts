import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';

import { RouterModule } from '@angular/router';
import { LoginComponent } from './feature/login/login.component';
import { BreadcrumbComponent } from './header/breadcrumb/breadcrumb.component';
import { MyOrdersComponent } from './feature/my-orders/my-orders.component';
import { FaqsComponent } from './feature/faqs/faqs.component';
import { ClassTimeTableComponent } from './modals/class-time-table/class-time-table.component';
import { BuyCoursesComponent } from './modals/buy-courses/buy-courses.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    LoginComponent,
    BreadcrumbComponent,
    MyOrdersComponent,
    FaqsComponent,
    ClassTimeTableComponent,
    BuyCoursesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
