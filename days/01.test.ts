import '../extension-methods.ts';
import {p1, p2} from './01.ts';
import {assertEquals} from "https://deno.land/std@0.208.0/testing/asserts.ts";

const input1 = '1abc2 \n' +
  'pqr3stu8vwx\n' +
  'a1b2c3d4e5f\n' +
  'treb7uchet';

const input2 = 'two1nine \n' +
'eightwothree \n' +
'abcone2threexyz \n' +
'xtwone3four \n' +
'4nineeightseven2 \n' +
'zoneight234 \n' +
'7pqrstsixteen \n';

// const input2 = 'one1nine \n';

Deno.test('it should run the first part of day 01 correctly', () => {
  const result = p1(input1);
  const expected = 142;
  assertEquals(result, expected);
});

Deno.test('it should run the second part of day 01 correctly', () => {
  const result = p2(input2);
  const expected = 281;
  assertEquals(result, expected);
});
