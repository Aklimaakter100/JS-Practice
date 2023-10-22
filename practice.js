//Class - 3.....

var numbers = [1,2,3,4,5,6,7,8,9];
//Array length....
console.log(numbers.length);
//Find single item by index number....
console.log(numbers[5]);
//Replace the numbers by index number....
numbers [3] = 12;
console.log(numbers);
//find item index number...
var item = numbers.indexOf(6);
console.log(item);
//push....
numbers.push(22);
console.log(numbers);
//pop.... 
numbers.pop();
console.log(numbers);
//Remove bracket of Array...
console.log(numbers.toString());
//Join Array item with (-).....
console.log(numbers.join("-"));
//Item add with more item....
var numbers = [[1.2],[3,4],[5,6]];
console.log(numbers);
var new_Number = numbers.flat();
console.log(new_Number);
//Some item add in Array...
var food = ["Rice","Hochpoch","Burger","Chawmin","Beaf."];
var drink = ["Apple_juice","Mango_juice"];
var All_meal = food.concat(drink);
console.log(All_meal);
//first item shift of Array....
food.shift("");
console.log(food);
//first item unshift of Array....
food.unshift("Biriani");
console.log(food);
//sploce - 1....
food.splice(1,0,"Soup");
console.log(food);
//sploce - 2....
food.splice(0,2,"Soup");
console.log(food);
//conditional operatoon....
x = 10
y = 50
z = 12

if(x>y && x>z){
	if (y>z) {
		console.log(x + "," + y + "," + z);
	}
	else {
		console.log(x + "," + z + "," + y);
	}
}
else if (y>x && y>z){
	if (x>z){
	    console.log(y + "," + x + "," + z);
	}
	else {
		console.log(y + "," + z + "," + x);
	}
}
else if (z>x && z>y){
	if (x>y){
	    console.log(z + "," + x + "," + y);
	}
}

