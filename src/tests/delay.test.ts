import delay from '@/utils/delay';

describe('delay test', () => {
  it('delay 함수는 함수를 받아서 지연 호출을 한다.', (done) => {
    let actual = true;
    delay(() => {
      actual = false;
    }, 10);

    setTimeout(() => {
      expect(actual).toBeTruthy();
      done();
    }, 2);
  });
});
