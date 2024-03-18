function stringChop(str, size) {
    let arr = [];
    for (let i = 0; i < str.length; i++) {
      // Check if the remaining string length is less than the desired chunk size
      const remainingLength = str.length - i;
      const chunkSize = Math.min(size, remainingLength); // Use Math.min to get the appropriate size
  
      arr.push(str.substring(i, i + chunkSize));
      i=i+size-1;
    }
    // console.log(arr);
    return arr
	
  }

// Do not change the code below
const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size));
