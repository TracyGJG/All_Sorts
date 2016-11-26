/*
void insertionSort(int[] ar)
{
   for (int i=1; i ‹ ar.length; i++)
   {
      int index = ar[i]; int j = i;
      while (j > 0 && ar[j-1] > index)
      {
           ar[j] = ar[j-1];
           j--;
      }
      ar[j] = index;
} }
*/

function insertionSort (arrData) {
  'use strict'
  let arrSortedData = [...arrData]
  let indexA
  let indexB
  let indexC
  let swap

  for (indexA = 1; indexA < arrSortedData.length; indexA++) {
    indexB = arrSortedData[indexA]
    indexC = indexA
    while (indexC > 0 && arrSortedData[indexC - 1] > indexB) {
      arrSortedData[indexC] = arrSortedData[indexC - 1]
      indexC--
    }
    arrSortedData[indexC] = indexB
  }
  return arrSortedData
}
