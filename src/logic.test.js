import { sum } from './logic';

describe('sum', () => {
    test('sum 1 + 3', () => {
        expect(sum(1, 3)).toBe(4);
    });
});
