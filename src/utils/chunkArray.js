/**
 * Returns an array with arrays of the given size.
 *
 * @param myArray {Array} Array to split
 * @param chunkSize {Integer} Size of every group
 */
export function chunkArray(myArray, chunkSize) {
  let results = [];
  let clone = [...myArray];

  while (clone.length) {
    results.push(clone.splice(0, chunkSize));
  }

  return results;
}
