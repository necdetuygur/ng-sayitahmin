import { Component } from '@angular/core';
import { GameService } from 'src/app/services/game.service';

import {
  AdMob,
  AdOptions,
  AdLoadInfo,
  InterstitialAdPluginEvents,
} from '@capacitor-community/admob';

@Component({
  selector: 'app-finish',
  templateUrl: './finish.component.html',
  styleUrls: ['./finish.component.css'],
})
export class FinishComponent {
  countdown = 5;
  countdownTimer = setInterval(() => {}, 1);
  constructor(public gameService: GameService) {}

  async ngOnInit() {
    setTimeout(async () => {
      await this.showInterstitial();
    }, 100);

    clearInterval(this.countdownTimer);
    setInterval(() => {
      if (this.countdown > 0) {
        this.countdown--;
      } else {
        clearInterval(this.countdownTimer);
      }
    }, 1e3);
  }

  async showInterstitial() {
    AdMob.addListener(
      InterstitialAdPluginEvents.Loaded,
      (info: AdLoadInfo) => {}
    );

    const options: AdOptions = {
      adId: 'ca-app-pub-1862541363203489/3124402264',
    };
    await AdMob.prepareInterstitial(options);
    await AdMob.showInterstitial();
  }
}
