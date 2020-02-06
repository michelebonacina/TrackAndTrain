import { Note } from './note';

describe('Message', () =>
{
    it('should create an instance', () =>
    {
        expect(new Note("", "")).toBeTruthy();
    });
});
