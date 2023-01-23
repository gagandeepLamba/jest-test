const {deterministicPartitionKey} = require('./index');
  describe('binaryStringToNumber', () => {
    describe('given an invalid binary string', () => {
      test('composed of non-numbers throws Error', () => {
        expect(() => deterministicPartitionKey('abc')).toThrow('Not a binary number.');
      });

      test('with extra whitespace throws Error', () => {
        expect(() => deterministicPartitionKey('  100')).toThrow('Not a binary number.');
      });
    });

    describe('given a valid binary string', () => {
      test('returns the correct number', () => {
        expect(deterministicPartitionKey('100')).toBe(4);
      });
    });
  });