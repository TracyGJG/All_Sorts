/*
procedure shellSort()
   A : array of items
   while interval < A.length /3 do:
      interval = interval * 3 + 1
   end while
   while interval > 0 do:
      for outer = interval; outer < A.length; outer ++ do:
      valueToInsert = A[outer]
      inner = outer;
         while inner > interval -1 && A[inner - interval] >= valueToInsert do:
            A[inner] = A[inner - interval]
            inner = inner - interval
         end while
      A[inner] = valueToInsert
      end for
   interval = (interval -1) / 3
   end while
end procedure
*/

function shellSort (arrData) {
  'use strict'
  let arrSortedData = [...arrData]
  let indexA = 1
  let indexB
  let indexC
  let indexD

  while (indexA < (arrSortedData.length / 3)) {
    indexA = indexA * 3 + 1
  }
  while (indexA > 0) {
    for (indexB = indexA; indexB < arrSortedData.length; indexB++) {
      indexC = arrSortedData[indexB]
      indexD = indexB
      while (indexD > indexA - 1 && arrSortedData[indexD - indexA] >= indexC) {
        arrSortedData[indexD] = arrSortedData[indexD - indexA]
        indexD = indexD - indexA
      }
      arrSortedData[indexD] = indexC
    }
    indexA = (indexA - 1) / 3
  }
  return arrSortedData
}
