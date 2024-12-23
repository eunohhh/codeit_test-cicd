/* eslint-disable @typescript-eslint/no-explicit-any */
import slice from '@/utils/slice';

describe('slice function', () => {
  it('빈 배열을 입력하면 빈 배열을 반환한다.', () => {
    // Arrange
    const input: any[] = [];
    const output: any[] = [];

    // Act
    const actual = slice(input);

    // Assert
    expect(actual).toEqual(output);
  });

  it('start만 제공하면 start부터 끝까지 반환한다.', () => {
    // Arrange
    const input = [1, 2, 3, 4];
    const output = [3, 4];

    // Act
    const actual = slice(input, 2);

    // Assert
    expect(actual).toEqual(output);
  });

  it('start와 end가 제공되면 해당 범위의 값을 반환한다.', () => {
    // Arrange
    const input = [1, 2, 3, 4];
    const output = [2, 3];

    // Act
    const actual = slice(input, 1, 3);

    // Assert
    expect(actual).toEqual(output);
  });

  it('start가 음수이면 끝에서부터의 오프셋으로 계산된다.', () => {
    // Arrange
    const input = [1, 2, 3, 4];
    const output = [3, 4];

    // Act
    const actual = slice(input, -2);

    // Assert
    expect(actual).toEqual(output);
  });

  it('end가 음수이면 끝에서부터의 오프셋으로 계산된다.', () => {
    // Arrange
    const input = [1, 2, 3, 4];
    const output = [2, 3];

    // Act
    const actual = slice(input, 1, -1);

    // Assert
    expect(actual).toEqual(output);
  });

  it('start가 end보다 크면 빈 배열을 반환한다.', () => {
    // Arrange
    const input = [1, 2, 3, 4];
    const output: any[] = [];

    // Act
    const actual = slice(input, 3, 2);

    // Assert
    expect(actual).toEqual(output);
  });

  it('end가 배열의 길이를 초과하면 끝까지 반환한다.', () => {
    // Arrange
    const input = [1, 2, 3, 4];
    const output = [2, 3, 4];

    // Act
    const actual = slice(input, 1, 10);

    // Assert
    expect(actual).toEqual(output);
  });

  it('start와 end가 모두 음수이면 각각 끝에서부터의 오프셋으로 계산된다.', () => {
    // Arrange
    const input = [1, 2, 3, 4];
    const output = [2, 3];

    // Act
    const actual = slice(input, -3, -1);

    // Assert
    expect(actual).toEqual(output);
  });

  it('start와 end가 undefined이면 전체 배열을 반환한다.', () => {
    // Arrange
    const input = [1, 2, 3, 4];
    const output = [1, 2, 3, 4];

    // Act
    const actual = slice(input);

    // Assert
    expect(actual).toEqual(output);
  });
});

// husky 작동 확인용
