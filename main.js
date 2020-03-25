function computeArea(width, height) {
  let width=2;
  console.log (width);
  let height= 2;
  /console.log (height);
  let width =+ 1}
  console.log(width);
  let height = +3;
  console.log(height);
  let computerArea= width * heigth;
  console.log (computeArea);

/* From here down, you are not expected to 
   understand.... for now :)  
   
   
   Nothing to see here!
   
*/

// tests

function testComputeArea() {
  let width = 3;
  let height = 4;
  let expected = 12;
  if (computeArea(width, height) === expected) {
    console.log('SUCCESS: `computeArea` is working');
  } else {
    console.log('FAILURE: `computeArea` is not working');
  }
}

testComputeArea();
