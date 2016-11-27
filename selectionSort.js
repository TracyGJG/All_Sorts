/* Explanation
  This algorithm is an in-place non-recursive operation.
  The operation uses nested loops to traverse the dataset several times.
  The algorithm gets its name from the way higher values are selected and pushed
    right, up the dataset but exchanging the lower values before after it.

  1) Outer Loop: Loops through all but the last values in the dataset.
  2) Preserve the index of current position
  3) Inner Loop: Traverse the array from the next index to the end of the dataset.
    3a) If the value of the inner Index is less than that of the Preserved index,
      Reset the Preservec index to the inner Index
    3b) If the Presevered index has not changed, replace it with the value of the
      Current index.
*/

function selectionSort (arrData) {
  'use strict'
  let indexA
  let indexB
  let indexC
  let dataMax = arrData.length

  function _swap (arrData, numSrc, numTgt) {
    let swap = arrData[numSrc]
    arrData[numSrc] = arrData[numTgt]
    arrData[numTgt] = swap
  }

  for (indexA = 0; indexA < dataMax - 1; indexA++) {
    indexB = indexA
    for (indexC = indexA + 1; indexC < dataMax; indexC++) {
      if (arrData[indexC] < arrData[indexB]) {
        indexB = indexC
      }
      if (indexA !== indexB) {
        _swap(arrData, indexA, indexB)
      }
    }
  }
  return arrData
}
