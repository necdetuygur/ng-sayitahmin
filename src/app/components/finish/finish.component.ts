import { Component } from '@angular/core';
import { GameService } from 'src/app/services/game.service';

import {
  AdMob,
  AdOptions,
  AdLoadInfo,
  InterstitialAdPluginEvents,
  RewardAdPluginEvents,
  AdMobRewardItem,
  RewardAdOptions,
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
      // await this.showInterstitial();
      await this.showReward();
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

  async showReward() {
    AdMob.addListener(RewardAdPluginEvents.Loaded, (info: AdLoadInfo) => {
      // alert(info);
    });
    AdMob.addListener(
      RewardAdPluginEvents.Rewarded,
      (rewardItem: AdMobRewardItem) => {
        // alert(rewardItem);
      }
    );
    const options: RewardAdOptions = {
      // adId: 'ca-app-pub-1862541363203489/9223897716',
      adId: 'ca-app-pub-1862541363203489/3635146227',
    };
    await AdMob.prepareRewardVideoAd(options);
    const rewardItem = await AdMob.showRewardVideoAd();
  }
}
