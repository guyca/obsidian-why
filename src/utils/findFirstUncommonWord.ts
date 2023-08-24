export function findFirstUncommonWord(mine: string, theirs: string): number {
  const a = mine.split(' ');
  const b = theirs.split(' ');

  let idx = 0;
  for (let i = 0; i < a.length; i++) {
    if (a[i] === b[i]) {
      idx += a[i].length;

      if (i > 0) {
        idx += 1; // account for white space
      }
    }
  }
  return idx;
}
