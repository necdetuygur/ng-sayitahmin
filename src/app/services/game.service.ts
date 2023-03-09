import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GameService {
  progress = 0;
  gameStarted = false;
  currentBox = 1;
  numbers: any = [];
  boxes: any = {};
  result = 0;
  constructor() {}
  gameFinished() {
    return this.currentBox == 128;
  }
  gameContinues() {
    return this.numbers.length > 0 && this.currentBox != 128;
  }
  box(n: number) {
    let d: any = {};
    let i = 0;
    while (++i < n + 1) {
      let a = x(i);
      for (let b in a) {
        let c = a[b];
        d[c] = d[c] == undefined ? [] : d[c];
        d[c].push(i);
      }
    }
    function x(b: number) {
      let r = [];
      let i = 8;
      while (--i) {
        let a = Math.pow(2, i - 1);
        if (a == b) {
          r.push(a);
          return r;
        } else if (b >= a && b % a >= 0) {
          let c = r.reduce((a, b) => a + b, 0);
          if (c + a <= b) r.push(a);
        }
      }
      return r;
    }
    return d;
  }
  dream(num: number) {
    this.result += num;
    this.next();
  }
  next() {
    this.progress += 14.285714285714286;
    this.currentBox *= 2;
    if (this.currentBox < 65) this.numbers = this.boxes[this.currentBox];
  }
  start() {
    this.gameStarted = true;
    this.boxes = this.box(100);
    this.numbers = this.boxes[this.currentBox];
  }
  restart() {
    this.progress = 0;
    this.gameStarted = false;
    this.currentBox = 1;
    this.numbers = [];
    this.boxes = {};
    this.result = 0;
  }
}
