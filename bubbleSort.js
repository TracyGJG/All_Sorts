/*
procedure bubbleSort( A : list of sortable items )
    n = length(A)
    repeat
       newn = 0
       for i = 1 to n-1 inclusive do
          if A[i-1] > A[i] then
             swap(A[i-1], A[i])
             newn = i
          end if
       end for
       n = newn
    until n = 0
end procedure
*/

function bubbleSort (arrData) {
  'use strict'
  let arrSortedData = [...arrData]
  let indexA = arrSortedData.length
  let indexB
  let indexC
  let swap

  do {
    indexB = 0
    for (indexC = 0; indexC < indexA; indexC++) {
      if (arrSortedData[indexC] > arrSortedData[indexC + 1]) {
        swap = arrSortedData[indexC]
        arrSortedData[indexC] = arrSortedData[indexC + 1]
        arrSortedData[indexC + 1] = swap
        indexB = indexC
      }
    }
    indexA = indexB
  } while (indexA > 0)
  return arrSortedData
}
