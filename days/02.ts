import '../extension-methods.ts';

export const p1 = (input: string): number => {
  const lines = input.splitRows();
  const ids = new Array<number>();
  lines.forEach(line => {
    //console.log(line);
    const [gamePrefix, rowsBase] = line.split(': ');
    const currentGameId = gamePrefix.split(' ')[1];
    //console.log(currentGameId);
    const rows = rowsBase.split('; ');
    //console.log(rows);
    let isValid = true;
    rows.forEach(row => {
      const colours = row.split(', ');
      //console.log(colours);
      colours.forEach(colour => {
        const [count, colourName] = colour.split(' ');
        //console.log(count, colourName);
        if(maxAllowed[colourName] < Number(count)) {
          console.log(`Game ${currentGameId} is invalid`);
          isValid = false;
          return;
        }
      });
    });
    if(isValid) {
      console.log(`Game ${currentGameId} is valid`);
      ids.push(Number(currentGameId));
    }
  });
  return ids.sum();
}

export const p2 = (input: string): number => {
  const lines = input.splitRows();
  //I need to find the minimal set that could make all the numbers possible;
  // e.g. if in a single row i have green 1, red 2, blue 3; green 3, red 2, blue 1; than the minimal set is green 3, red 2, blue 3;
  // I then need to multiply the numbers in the minimal set; --> 3 * 2 * 3 = 18
  // I need to do this for each row and then sum the results;
  let finalNumber = 0;
  lines.forEach(line => {
    const [gamePrefix, rowsBase] = line.split(': ');
    const currentGameId = gamePrefix.split(' ')[1];
    let [maxGreen, maxRed, maxBlue] = [1, 1, 1];
    const rows = rowsBase.split('; ');
    rows.forEach(row => {
      const colours = row.split(', ');
      colours.forEach(colour => {
        const [count, colourName] = colour.split(' ');
        switch(colourName) {
          case 'green':
            maxGreen = Math.max(maxGreen, Number(count));
            break;
          case 'red':
            maxRed = Math.max(maxRed, Number(count));
            break;
          case 'blue':
            maxBlue = Math.max(maxBlue, Number(count));
            break;
        }
      });
    });
    const currentNumber = maxGreen * maxRed * maxBlue;
    console.log(`Game ${currentGameId} has number ${currentNumber}`);
    finalNumber += currentNumber;
  });

  return finalNumber;
}

export const maxAllowed: Record<string, number> = {
  'red': 12,
  'green': 13,
  'blue': 14,
};