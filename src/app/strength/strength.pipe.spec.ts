import { StrengthPipe } from "./strength.pipe"

describe('StrengthPipe', () => {
    it('should display weak if strength is 7', () => {
        let pipe = new StrengthPipe();

        expect(pipe.transform(7)).toEqual('7 (weak)');
    })

    it('should display strong if strength is 10', () => {
        let pipe = new StrengthPipe();

        expect(pipe.transform(10)).toEqual('10 (strong)');
    })

    it('should display unbelievable if strength is 21', () => {
        let pipe = new StrengthPipe();

        expect(pipe.transform(21)).toEqual('21 (unbelievable)');
    })
})