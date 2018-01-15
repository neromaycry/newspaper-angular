import { CommonModule } from '@angular/common';
import { Optional, SkipSelf, NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { ApiService } from './services/api.service';
import { reducers, metaReducers } from './reducers/reducers';

@NgModule({
    imports: [
        CommonModule,
        StoreModule.forRoot(reducers, { metaReducers })
    ],
    declarations: [],
    exports: [],
    providers: [
        ApiService
    ]
})
export class CoreModule {

    constructor( @Optional() @SkipSelf() parentModule: CoreModule) {
        if (parentModule) {
            throw new Error('CoreModule is already loaded.Import it in the AppModule only');
        }
    }
}
