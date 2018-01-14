import { CommonModule } from '@angular/common';
import { Optional, SkipSelf, NgModule } from '@angular/core';

@NgModule({
    imports: [CommonModule],
    declarations: [],
    exports: [],
    providers: []
})
export class CoreModule {

    constructor( @Optional() @SkipSelf() parentModule: CoreModule) {
        if (parentModule) {
            throw new Error('CoreModule is already loaded.Import it in the AppModule only');
        }
    }
}
