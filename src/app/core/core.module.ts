import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'
import { HeaderComponent } from './header/header.component';
import { AuthService } from './service/auth.service'
import { UserService } from './service/user.service'



@NgModule({
  declarations: [
    HeaderComponent,
  ],
  providers: [
    AuthService
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
  ]
})
export class CoreModule {

  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error('CoreModule has already been loaded. Import Core module.')
    }
  }
}
