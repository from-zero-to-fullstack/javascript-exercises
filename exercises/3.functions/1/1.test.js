const { reverse } = require('./1');

test('', () => {
    const expected = 34223;

    const actual = reverse(32243);

    expect(actual).toBe(expected);
});