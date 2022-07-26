export const createArray =() =>{
    let array= Array.from({length: 16}, (_, i) => i + 1) 
   return array.sort((a, b) => 0.5 - Math.random());
}

export const isArraySorted=(arr)=> {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i + 1] && arr[i + 1] > arr[i]) {
        continue;
      } else if (arr[i + 1] && arr[i + 1] < arr[i]) {
        return false;
      }
    }
    return true;
  }