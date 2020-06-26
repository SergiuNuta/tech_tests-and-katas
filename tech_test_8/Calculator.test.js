
import { Calculator } from './Calculator'
// const Calculator = import("./Calculator");
// jest.mock('./Calculator.js')
// const { expect } = import('chai');
// import { expect } from 'chai'



describe('calculator', () => {

    it('should return 0 with an empty string', () => {
        const calculator = new Calculator('');
        expect(calculator.number).toBe(0);
    });

    it('should return the number if given a single number', () => {
        const calculator = new Calculator('1');
        expect(calculator.number).toBe(1);
    });

    it('should return sum of two comma delimited numbers', () => {
        let calculator = new Calculator('0,1');
        expect(calculator.number).toBe(1);
        calculator = new Calculator('1,5');
        expect(calculator.number).toBe(6);
        calculator = new Calculator('2,A');
        expect(calculator.number).toBe(2);
        calculator = new Calculator('2,,A');
        expect(calculator.number).toBe(2);
    });

    it('should return sum of two new-line delimited numbers', () => {
        let calculator = new Calculator('0\n1');
        expect(calculator.number).toBe(1);
        calculator = new Calculator('6\n7');
        expect(calculator.number).toBe(13);
    });

    it('should return sum of three new-line or comma delimited numbers', () => {
        const calculator = new Calculator('0\n1,2');
        expect(calculator.number).toBe(3);
    });

    it('should throw an exception on negative numbers', () => {
        const calculator = new Calculator('-1');
        expect(calculator.number).toThrow(TypeError);
    });

    it('should ignore numbers > 1000', () => {
        let calculator = new Calculator('1,2,1001');
        expect(calculator.number).toBe(3);
        calculator = new Calculator('1001');
        expect(calculator.number).toBe(0);

    });

    it('should be able to specify a single character delimiter on the first line', () => {
        const calculator = new Calculator('//#1#42');
        expect(calculator.number).toBe(43);
    });

    it('should be able to specify a multiple character delimiters on the first line', () => {
        const calculator = new Calculator('//[##]1##42');
        expect(calculator.number).toBe(43);
    });
});

