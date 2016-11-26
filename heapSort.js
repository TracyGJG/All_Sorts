function heapSort (arrData) {
  'user strict'
  let arrSorted = [...arrData]
  let numTail = arrSorted.length - 1  // Reference to last element
  const NEED_CHANGE = 1
  const NO_CHANGE = 0
  const LEFT_CHILD = 1
  const RIGHT_CHILD = 2

  const fnChildId = (parentId, side) => {
    let childId = (parentId * 2) + side
    return (childId <= numTail) ? childId : NO_CHANGE
  }

  function fnSwap (idx1, idx2) {
    let swap = arrSorted[idx1]
    arrSorted[idx1] = arrSorted[idx2]
    arrSorted[idx2] = swap
  }

  function fnBalanceTriad (parentIdx) {
    let numBalanced = NO_CHANGE
    let leftChild = fnChildId(parentIdx, LEFT_CHILD)
    if (leftChild) {
      let rightChild = fnChildId(parentIdx, RIGHT_CHILD)
      if (rightChild &&
        (arrSorted[parentIdx] < arrSorted[rightChild]) &&
        (arrSorted[leftChild] < arrSorted[rightChild])) {
        fnSwap(parentIdx, rightChild)
        numBalanced = RIGHT_CHILD
      } else if (arrSorted[parentIdx] < arrSorted[leftChild]) {
        fnSwap(parentIdx, leftChild)
        numBalanced = LEFT_CHILD
      }
    }
    return numBalanced
  }

  function fnRemoveHead () {
    fnSwap(0, numTail--)  // Sorted
    let numBalanced = NO_CHANGE
    let idx = 0 // Reference to first element
    do {
      numBalanced = fnBalanceTriad(idx)
      idx += (idx + numBalanced)  //  Follow the change path
    } while (numBalanced) // We can stop when we encounter NO_CHANGE
  }

  function fnBalanceHeap () {
    let idx
    let numBalanced = NEED_CHANGE
    while (numBalanced) {
      numBalanced = NO_CHANGE
      idx = numTail
      while (idx + 1) numBalanced += fnBalanceTriad(idx--) //  Balance triads in L->R, T->B (not path) order
    }
  }

  fnBalanceHeap() // Perform an inital balancing of the array using the heap
  while (numTail) fnRemoveHead()  // Poor name - Add highest value (head) to tail
  return arrSorted
}
