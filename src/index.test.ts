import {describe, expect, test} from "vitest";
import {fizzbuzz} from "./fizzbuzz";

describe("kata", () => {
    test('should return 1', () => {
        expect(fizzbuzz(1)).toEqual(1)
    });
})