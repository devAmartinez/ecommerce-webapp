import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { appRoutingProviders, routing } from './app.routing';
import { HttpModule  } from '@angular/http';
import { AppComponent } from './app.component';
// -------------------------------------------

// Componentes para estilos material
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialAppModule } from './material.module';
// -------------------------------------------



// Componentes propios
import { HeaderComponent } from './components/general/header-login.component';
import { LogoutComponent } from './components/user/logout.component';
import { FooterComponent } from './components/general/footer.component';
import { HomeComponent } from './components/general/home.component';

import { ProductsListComponent } from './components/product/products-list.component';
import { ProductAddComponent } from './components/product/product-add.component';
import { ProductDetailComponent } from './components/product/product-detail.component';
import { ProductEditComponent } from './components/product/product-edit.component';

import { SignInComponent } from './components/user/sign-in.component';
import { SignUpComponent } from './components/user/sign-up.component';
import { ModalViewUserComponent } from './components/user/modal-view-login.component';
import { DialogOverviewDialog } from './components/modal_view/dialog-overview.component';

import { Error404Component } from './components/error/error-404.component';

// Servicios

import { HeaderLoginService } from './services/header-login.service';
import { UserService } from './services/user.service';
import { LocalStorageService } from './services/local-storage.service';
// -------------------------------------------


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DialogOverviewDialog,
    FooterComponent,
    HomeComponent,
    ProductsListComponent,
    ProductAddComponent,
    ProductDetailComponent,
    ProductEditComponent,
    SignInComponent,
    SignUpComponent,
    LogoutComponent,
    ModalViewUserComponent,
    Error404Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    NoopAnimationsModule,
    MaterialAppModule,
    routing
  ],
  providers: [
    appRoutingProviders,
    {
      provide: 'AUTH_TOKEN', 
      useValue: 'token'
    },
    HeaderLoginService,
    UserService,
    LocalStorageService
  ],
  entryComponents: [
    //HeaderComponent, 
    DialogOverviewDialog
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
