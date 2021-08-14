import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './user-interface/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/material/material.module';
import { TopBarComponent } from './user-interface/top-bar/top-bar.component';
import { SignUpComponent } from './user-interface/sign-up/sign-up.component';
import { DEFAULT_TIMEOUT, HttpInterceptorService } from './communication/http-interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TopBarComponent,
    SignUpComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpInterceptorService,
      multi: true
    },
    {
      provide: DEFAULT_TIMEOUT,
      useValue: 10000
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
