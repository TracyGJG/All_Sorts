/*
void selectionSort(int[] ar){
   for (int i = 0; i ‹ ar.length-1; i++)
   {
      int min = i;
      for (int j = i+1; j ‹ ar.length; j++)
            if (ar[j] ‹ ar[min]) min = j;
      int temp = ar[i];
      ar[i] = ar[min];
      ar[min] = temp;
} }
*/

function selectionSort (arrData) {
  'use strict'
  let arrSortedData = [...arrData]
  let indexA
  let indexB
  let indexC
  let swap

  for (indexA = 0; indexA < arrSortedData.length - 1; indexA++) {
    indexB = indexA
    for (indexC = indexA + 1; indexC < arrSortedData.length; indexC++) {
      if (arrSortedData[indexC] < arrSortedData[indexB]) {
        indexB = indexC
      }
      swap = arrSortedData[indexA]
      arrSortedData[indexA] = arrSortedData[indexB]
      arrSortedData[indexB] = swap
    }
  }
  return arrSortedData
}
