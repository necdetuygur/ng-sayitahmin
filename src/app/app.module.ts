import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CardComponent } from './components/card/card.component';
import { FinishComponent } from './components/finish/finish.component';
import { IntroComponent } from './components/intro/intro.component';
import { ProgressComponent } from './components/progress/progress.component';
import { UygulamalarComponent } from './components/uygulamalar/uygulamalar.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    FinishComponent,
    IntroComponent,
    ProgressComponent,
    UygulamalarComponent,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
