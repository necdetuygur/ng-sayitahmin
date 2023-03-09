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
        initializeForTesting: true,
      });

      const admobOptions: BannerAdOptions = {
        adId: 'ca-app-pub-3940256099942544~3347511713',
        adSize: BannerAdSize.FULL_BANNER,
        position: BannerAdPosition.TOP_CENTER,
        margin: 0,
        isTesting: true,
        // npa: true
      };
      AdMob.showBanner(admobOptions);
    }
  }
}
