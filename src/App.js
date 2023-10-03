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
    const randomNumbers = [];
    while(randomNumbers.length < 3) {
      const pickNumber = MissionUtils.Random.pickNumberInRange(1, 9);
      if(!randomNumbers.includes(pickNumber)) randomNumbers.push(pickNumber);
    }
    this.randomNumbers = randomNumbers;
  }
}

module.exports = App;
