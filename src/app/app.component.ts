import { Component } from '@angular/core';

import {
  AdMob,
  BannerAdOptions,
  BannerAdSize,
  BannerAdPosition,
} from '@capacitor-community/admob';
import { Device } from '@capacitor/device';
import { App as CapacitorApp } from '@capacitor/app';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  async ngOnInit() {
    const deviceInfo = await Device.getInfo();

    if (deviceInfo.platform !== 'web') {
      CapacitorApp.addListener('backButton', ({ canGoBack }) => {
        if (!canGoBack) {
          CapacitorApp.exitApp();
        } else {
          window.history.back();
        }
      });
    }

    if (deviceInfo.platform !== 'web') {
      AdMob.initialize({
        // requestTrackingAuthorization: true,
        testingDevices: [''],
        initializeForTesting: false,
      });

      const admobOptions: BannerAdOptions = {
        adId: 'ca-app-pub-1862541363203489/3052061751',
        adSize: BannerAdSize.BANNER,
        position: BannerAdPosition.TOP_CENTER,
        margin: 0,
        isTesting: false,
        // npa: true
      };
      AdMob.showBanner(admobOptions);
    }
  }
}
