import { Component } from '@angular/core';
import { GameService } from './services/game.service';
import {
  AdMob,
  BannerAdOptions,
  BannerAdSize,
  BannerAdPosition,
} from '@capacitor-community/admob';
import { Device } from '@capacitor/device';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(public gameService: GameService) {}

  async ngOnInit() {
    const deviceInfo = await Device.getInfo();
    if (deviceInfo.platform !== 'web') {
      AdMob.initialize({
        requestTrackingAuthorization: true,
        testingDevices: [''],
        initializeForTesting: false,
      });

      const admobOptions: BannerAdOptions = {
        adId: 'ca-app-pub-1862541363203489~1311046192',
        adSize: BannerAdSize.FULL_BANNER,
        position: BannerAdPosition.TOP_CENTER,
        margin: 0,
        isTesting: false,
        // npa: true
      };
      AdMob.showBanner(admobOptions);
    }
  }
}
