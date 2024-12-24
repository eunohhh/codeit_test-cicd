/* eslint-disable @typescript-eslint/no-explicit-any */
import chunk from '@/utils/chunk';

describe('chunk function', () => {
  it('빈 배열을 입력하면 빈 배열을 반환한다.', () => {
    // Arrange
    const input: any[] = [];
    const output: any[] = [];

    // Act
    const actual = chunk(input);

    // Assert
    expect(actual).toEqual(output);
  });

  it('size가 0보다 작으면 빈 배열을 반환한다.', () => {
    // Arrange
    const input: any[] = ['a', 'b', 'c', 'd'];
    const output: any[] = [];

    // Act
    const actual = chunk(input, -1);

    // Assert
    expect(actual).toEqual(output);
  });

  it('size가 1보다 작으면 빈 배열을 반환한다.', () => {
    // Arrange
    const input: any[] = ['a', 'b', 'c', 'd'];
    const output: any[] = [];

    // Act
    const actual = chunk(input, 0);

    // Assert
    expect(actual).toEqual(output);
  });

  it('size가 1보다 크면 배열을 분할한다.', () => {
    // Arrange
    const input: any[] = ['a', 'b', 'c', 'd'];
    const output: any[] = [
      ['a', 'b'],
      ['c', 'd'],
    ];

    // Act
    const actual = chunk(input, 2);

    // Assert
    expect(actual).toEqual(output);
  });

  it('slice 가 실수일 경우에는 버림을 한다. ', () => {
    // Arrange
    const input: any[] = ['a', 'b', 'c', 'd'];
    const output: any[] = [
      ['a', 'b'],
      ['c', 'd'],
    ];

    // Act
    const actual = chunk(input, 2.5);

    // Assert
    expect(actual).toEqual(output);
  });
});
