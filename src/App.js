const MissionUtils = require('@woowacourse/mission-utils');

class App {
  constructor() {
    this.randomNumbers = [];
    this.inputNumbers = [];
  }
  play() {
    MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');
    this.makeRandomNumbers();
    this.startGame();
  }
  makeRandomNumbers() {
    const randomNumbers = [];
    while(randomNumbers.length < 3) {
      const pickNumber = MissionUtils.Random.pickNumberInRange(1, 9);
      if(!randomNumbers.includes(pickNumber)) randomNumbers.push(pickNumber);
    }
    this.randomNumbers = randomNumbers;
  }
  startGame() {
    MissionUtils.Console.readLine('숫자를 입력해 주세요. : ', (input) => {
      this.inputNumbers = input.split('').map(num => parseInt(num));
      this.checkInputException();
    })
  }
  checkInputException() {
    const duplicateNumber = [];
    if(this.inputNumbers.length !== 3) {
      throw new Error('세 자리 수를 입력해 주세요.');
    }
    this.inputNumbers.forEach(num => {
      if(isNaN(num) || num === 0) throw new Error('1~9 사이의 숫자를 입력해 주세요.');
      if(!duplicateNumber.includes(num)) {
        duplicateNumber.push(num);
      }else {
        throw new Error('서로 다른 세 자리 수를 입력해 주세요.');
      }
    });
  }
}

module.exports = App;
