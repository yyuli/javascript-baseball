const MissionUtils = require('@woowacourse/mission-utils');

class App {
  constructor() {
    this.randomNumbers = [];
    this.inputNumbers = [];
    this.strike = 0;
    this.ball = 0;
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
      this.countResult();
      this.printResult();
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
  countResult() {
    let strike = 0;
    let ball = 0;
    this.inputNumbers.forEach((inputNum, inputIdx) => {
      this.randomNumbers.forEach((randomNum, randomIdx) => {
        if(inputNum === randomNum && inputIdx === randomIdx) {
          strike++;
        }else if(inputNum === randomNum && inputIdx !== randomIdx) {
          ball++;
        }
      })
    })
    this.strike = strike;
    this.ball = ball;
  }
  printResult() {
    if(this.strike === 0 && this.ball === 0) {
      MissionUtils.Console.print('낫싱');
      this.startGame();
    }else if(this.strike === 0 && this.ball !== 0) {
      MissionUtils.Console.print(`${this.ball}볼`);
      this.startGame();
    }else if(this.strike !== 0 && this.ball === 0) {
      MissionUtils.Console.print(`${this.strike}스트라이크`);
      if(this.strike === 3) {
        MissionUtils.Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
        this.reStart();
      }else {
        this.startGame();
      }
    }else {
      MissionUtils.Console.print(`${this.ball}볼 ${this.strike}스트라이크`);
      this.startGame();
    }
  }
  reStart() {
    MissionUtils.Console.readLine(`게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.
`, (num) => {
      if(num === "1") {
        this.randomNumbers = [];
        this.userInput = [];
        this.strike = 0;
        this.ball = 0;
        this.makeRandomNumbers();
        this.startGame();
      }else if(num === "2") {
        MissionUtils.Console.close();
      }
    })
  }
}

module.exports = App;
