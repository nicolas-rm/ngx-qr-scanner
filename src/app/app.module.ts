import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SafePipe } from './safe.pipe';
import { FormsModule } from '@angular/forms';
import { LOAD_WASM, NgxScannerQrcodeModule } from 'ngx-scanner-qrcode';
import { QrComponent } from './qr/qr.component';
import { ServiceWorkerModule } from '@angular/service-worker';

LOAD_WASM().subscribe((res: any) => {
    console.log('LOAD_WASM', res);
});

@NgModule({
    declarations: [AppComponent, SafePipe, QrComponent],
    imports: [
        BrowserModule,
        FormsModule,
        NgxScannerQrcodeModule,
        ServiceWorkerModule.register('ngsw-worker.js', {
          enabled: !isDevMode(),
          // Register the ServiceWorker as soon as the application is stable
          // or after 30 seconds (whichever comes first).
          registrationStrategy: 'registerWhenStable:30000'
        })
    ],
    providers: [],
    bootstrap: [AppComponent, QrComponent],
})
export class AppModule {}
