import {describe, expect, test} from "vitest";
import {fizzbuzz} from "./fizzbuzz";

describe("kata", () => {
    test('should return the correct number', () => {
        expect(fizzbuzz(1)).toEqual(1)
        expect(fizzbuzz(2)).toEqual(2)
        expect(fizzbuzz(3)).toEqual('fizz')
        expect(fizzbuzz(5)).toEqual('buzz')
    });

})