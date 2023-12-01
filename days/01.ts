import '../extension-methods.ts';

export const p1 = (input: string): number => {
  const lines = input.splitRows();
  const numbers =
    lines.map(line => {
      const firstDigit = line.match(/\d/)?.[0] ?? '';
      const lastDigit = line.match(/\d/g)?.pop() ?? '';
      return Number(firstDigit + lastDigit);
    });


  return numbers.sum();
}

export const p2 = (input: string): number => {
  const lines = input.splitRows();
  const spelledOutNumbers=  new Map([
    ['one', '1'],
    ['two', '2'],
    ['three', '3'],
    ['four', '4'],
    ['five', '5'],
    ['six', '6'],
    ['seven', '7'],
    ['eight', '8'],
    ['nine', '9'],
    ['zero', '0'],
    ['1', '1'],
    ['2', '2'],
    ['3', '3'],
    ['4', '4'],
    ['5', '5'],
    ['6', '6'],
    ['7', '7'],
    ['8', '8'],
    ['9', '9'],
    ['0', '0'],
  ]);

  const reversedSpelledOutNumbers = new Map([
    ['eno', '1'],
    ['owt', '2'],
    ['eerht', '3'],
    ['ruof', '4'],
    ['evif', '5'],
    ['xis', '6'],
    ['neves', '7'],
    ['thgie', '8'],
    ['enin', '9'],
    ['orez', '0'],
    ['1', '1'],
    ['2', '2'],
    ['3', '3'],
    ['4', '4'],
    ['5', '5'],
    ['6', '6'],
    ['7', '7'],
    ['8', '8'],
    ['9', '9'],
    ['0', '0'],
  ]);

  const numbers =lines.map(line => {
    const reversedLine = line.split('').reverse().join('');
    const matchedString = line.match(/one|two|three|four|five|six|seven|eight|nine|ten|\d/);
    const firstDigit = matchedString?.[0] ?? '';
    const reversedMatchedString = reversedLine.match(/eno|owt|eerht|ruof|evif|xis|neves|thgie|enin|net|\d/);
    const lastDigit = reversedMatchedString?.[0] ?? '';
    const convertedFirstDigit = spelledOutNumbers.get(firstDigit) ?? firstDigit;
    const convertedLastDigit = reversedSpelledOutNumbers.get(lastDigit) ?? lastDigit;
    const inbetween = convertedFirstDigit + convertedLastDigit;
    return Number(inbetween);
  });
  console.log(numbers.sum());

  return numbers.sum();
}

