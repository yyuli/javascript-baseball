const MissionUtils = require('@woowacourse/mission-utils');

class App {
  constructor() {
    this.randomNumbers = [];
  }
  play() {
    MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');
    this.makeRandomNumbers();
  }
  makeRandomNumbers() {
    while(this.randomNumbers.length < 3) {
      const pickNumber = MissionUtils.Random.pickNumberInRange(1, 9);
      if(!this.randomNumbers.includes(pickNumber)) this.randomNumbers.push(pickNumber);
    }
  }
}

module.exports = App;
