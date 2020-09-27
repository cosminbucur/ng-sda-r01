import { UsersService } from './services/users.service';
import { SharedModule } from './../shared/shared.module';
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { ToastrModule } from 'ngx-toastr/toastr/toastr.module';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    // components
  ],
  imports: [
    // modules
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    HttpClientModule,
    // ToastrModule.forRoot({
    //   timeOut: 2000,
    //   preventDuplicates: true
    // })
  ],
  providers: [
    // custom services
    UsersService
  ]
})
export class CoreModule {
  /* make sure CoreModule is imported only by one NgModule the AppModule */
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error('CoreModule is already loaded. Import only in AppModule');
    }
  }
}
