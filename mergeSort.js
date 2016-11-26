/*
procedure mergesort( var a as array )
   if ( n == 1 ) return a
   var l1 as array = a[0] ... a[n/2]
   var l2 as array = a[n/2+1] ... a[n]
   l1 = mergesort( l1 )
   l2 = mergesort( l2 )
   return merge( l1, l2 )
end procedure
*/

/*
procedure merge( var a as array, var b as array )
   var c as array
   while ( a and b have elements )
      if ( a[0] > b[0] )
         add b[0] to the end of c
         remove b[0] from b
      else
         add a[0] to the end of c
         remove a[0] from a
      end if
   end while
   while ( a has elements )
      add a[0] to the end of c
      remove a[0] from a
   end while
   while ( b has elements )
      add b[0] to the end of c
      remove b[0] from b
   end while
   return c
end procedure
*/

function mergeSort (arrData) {
  'use strict'
  let arrSortedData = [...arrData]
  let indexA
  let indexB
  let indexC

  function merge (arrA, arrB) {
    let arrC = []
    while (arrA.length && arrB.length) {
      if (arrA[0] > arrB[0]) {
        arrC.push(arrB.shift())
      } else {
        arrC.push(arrA.shift())
      }
    }
    return arrC.concat(arrA).concat(arrB)
  }

  if (arrSortedData.length > 1) {
    // Split the source array in two
    indexA = Math.floor(arrSortedData.length / 2)
    indexB = arrSortedData.slice(0, indexA)
    indexC = arrSortedData.slice(indexA)
    // Process each half and merge them
    return merge(mergeSort(indexB), mergeSort(indexC))
  } else {
    return arrSortedData
  }
}
