var marks = [6,9,2,10,12]
function setup() 
{
 average()
  console.log(marks)
  createCanvas(400,400);
}

function draw() 
{
background(51);

}

function average(){
//sum by total
var sum = marks[0]+marks[1]+marks[2]+marks[3]+marks[4]
var avg = sum / marks.length
console.log(avg)

}
