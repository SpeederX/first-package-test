// const Compute = require('../src/index');
import {ERROR} from "../src/error";
import { Compute } from "../src/index.js";

describe('Testing sum', () => {
  it('adds 1 + 2 to equal 3', () => {
    expect(Compute.add(1, 2)).toBe(3);
  });
  it('adds "1" + 2 to equal "First parameter must be number"', () => {
    expect(Compute.add("1", 2)).toThrow(ERROR.SUM.MUST_BE_NUMBER("First parameter"));
  });
  it('adds 1 + "2" to equal "Second parameter must be number"', () => {
    expect(Compute.add(1, "2")).toThrow(ERROR.SUM.MUST_BE_NUMBER("Second parameter"));
  });
  it('adds -1 + 2 to equal "First parameter must be non-negative"', () => {
    expect(Compute.add(-1, 2)).toBe(ERROR.SUM.NEGATIVE_NUMBER("First parameter"));
  });
  it('adds 1 + -2 to equal "Second parameter must be non-negative"', () => {
    expect(Compute.add(1, -2)).toBe(ERROR.SUM.NEGATIVE_NUMBER("Second parameter"));
  });

});