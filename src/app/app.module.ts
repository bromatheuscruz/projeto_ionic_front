import { AuthInterceptorProvider } from "./../interceptors/auth.interceptor";
import { ClienteService } from "../services/domain/cliente.service";
import { ErrorInterceptorProvider } from "./../interceptors/error.interceptor";
import { CategoriaService } from "./../services/domain/categoria.service";
import { BrowserModule } from "@angular/platform-browser";
import { ErrorHandler, NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { IonicApp, IonicErrorHandler, IonicModule } from "ionic-angular";

import { MyApp } from "./app.component";

import { StatusBar } from "@ionic-native/status-bar";
import { SplashScreen } from "@ionic-native/splash-screen";
import { AuthService } from "../services/auth.service";
import { StorageService } from "../services/storage.service";

@NgModule({
  declarations: [MyApp],
  imports: [BrowserModule, HttpClientModule, IonicModule.forRoot(MyApp)],
  bootstrap: [IonicApp],
  entryComponents: [MyApp],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    CategoriaService,
    AuthService,
    StorageService,
    AuthInterceptorProvider,
    ErrorInterceptorProvider,
    ClienteService
  ]
})
export class AppModule {}
