import React from 'react';
import logo from './logo.svg';
import './App.css';


function App() {
  function mSort(array) {
    if (array.length <= 1) {
        return array;
    }

    const middle = Math.floor(array.length / 2);
    let left = array.slice(0, middle);
    let right = array.slice(middle, array.length);

    left = mSort(left);
    right = mSort(right);
    return merge(left, right, array);
};
function merge(left, right, array) {
  let leftIndex = 0;
  let rightIndex = 0;
  let outputIndex = 0;
  while (leftIndex < left.length && rightIndex < right.length) {
      if (left[leftIndex] < right[rightIndex]) {
          array[outputIndex] = left[leftIndex++];
          outputIndex++
          
      }
      else {
          array[outputIndex] = right[rightIndex++];
          outputIndex++
          
      }
  }

  for (let i = leftIndex; i < left.length; i++) {
      array[outputIndex] = left[i];
      outputIndex++
      
  }

  for (let i = rightIndex; i < right.length; i++) {
      array[outputIndex] = right[i];
      outputIndex++
      
  }
  return array;
};
function qSort(array, start = 0, end = array.length){
  if(start >= end){
    return array
  }
  const middle = partition(array, start, end)
  console.log('mid is'+middle)
  array = qSort(array, start, middle)
  array = qSort(array, middle+1, end)
  return array

}
function partition(array, start, end) {
  const pivot = array[end - 1];
  console.log(pivot)
  let j = start;
  for (let i = start; i < end - 1; i++) {
      if (array[i] <= pivot) {
          console.log('i is'+i)
          swap(array, i, j);
          j++;
          console.log('j is'+j)
      }
  }
  swap(array, end-1, j);
  return j;
  
};
function swap(array, i, j) {
  const tmp = array[i];
  array[i] = array[j];
  array[j] = tmp;
};
  function main(){
    const dummy = [5,1,3,7,8,9,0,4,2,6]
    console.log(qSort([2,4,3,1,5]))
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        {main()}
      </header>
    </div>
  );
}

export default App;
