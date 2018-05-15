import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { CreditCardMaskPipe } from './credit-card-mask.pipe';
// import { CreditCardService } from './credit-card.service';
import { LoginComponent } from './login.component';

@NgModule({
    imports: [CommonModule],
    declarations: [
        // CreditCardMaskPipe,
        LoginComponent
    ],
    exports: [LoginComponent]
})
export class LoginModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: LoginModule,
            // providers: [CreditCardService]
        }
    }
}