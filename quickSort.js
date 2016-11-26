function quickSort (arrData) {
  'use strict'
  _quickSort(arrData, 0, arrData.length - 1)

  function _swap (arrData, numSrc, numTgt) {
    let swap = arrData[numSrc]
    arrData[numSrc] = arrData[numTgt]
    arrData[numTgt] = swap
  }

  function _partition (arrData, numStart, numEnd) {
    let pivot = arrData[numEnd]
    let pIndex = numStart
    for (let idx = numStart; idx < numEnd; idx++) {
      if (arrData[idx] <= pivot) {
        _swap(arrData, idx, pIndex++)
      }
    }
    _swap(arrData, pIndex, numEnd)
    return pIndex
  }
  function _quickSort (arrData, numStart, numEnd) {
    if (numStart < numEnd) {
      const pIndex = _partition(arrData, numStart, numEnd)
      _quickSort(arrData, numStart, pIndex - 1)
      _quickSort(arrData, pIndex + 1, numEnd)
    }
  }
  return arrData
}
