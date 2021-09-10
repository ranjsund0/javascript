1.
function arr() {
    var newarr = [];
    
    for (var i = 1; i < 256; i++) {
        newarr.push(i);
    }
    return newarr;
}
console.log(arr());

2.
function get_even_1000() {
var sum = 0;
    for (var i = 1; i < 1001; i++) {
        if (i % 2 == 0) {
            sum += i;
        }
    }return sum; 
}
console.log(get_even_1000());

3.
console.log(get_even_1000());

function sum_array(arr) {
var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}
console.log(sum_array([1,2,4]));


4.
function sum_odd() {
    var sum = 0;
    for (var i = 1; i <= 5000; i++) {
        if (i % 2 !== 1) {
            sum+=i;

        }
    }
    return sum;
}
console.log(sum_odd());
    

5.
function max_array(maxarray) {
var max = maxarray[0];
    for ( var i = 0; i < maxarray.length; i++) {
        if (maxarray[i] > max) {
            max = maxarray[i];
        }
    }
    return max
}
console.log(max_array([-3,5-6,-2]));

6.
function average() {
    var sum = 0;
    var avg = 0;
    for (var i = 0; i < arr.length; i++) {
        sum+=arr[i];
    }
    avg = sum/arr.length
    return avg;
}

7.
function oddArray(){
    var arr = [];
    for (var x = 1; x < 50; x+=2){
        arr.push(x);
    }
    return arr;
}

// 

8.
function greater_y(arr,y) {
    var count = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i]) > y {
            count++;
        }
    }
    return count;
}
console.log(greater_y([1,3,5,7],2));

9.
function square(arr) {

    for (var i = 0; i < arr.length; i++) {
        arr[i] = ar[i] * arr[i]; 
    }
}


10. 
function negative(arr) {
    for ( var i = 0; i <arr.length; i++) {
        if (arr[i] < 0) {
            arr[i] = 0;
        }
    }
    console.log(arr);
}
console.log(negative ([-1,2,-5]));

11.
function min_max_avg(arr) {
    var max = arr[0];
    var min = arr[0];
    var total = 0;

    for(var i = 0; i < arr.length; i++) {
        total+=arr[i]; 

        if (arr[i] > max) {
            max = arr[i];
        }
        else if (arr[i] < min) {
            min = arr[i];
        }
        
    }
    var newArr =[];
    newArr.push(max);
    newArr.push(min);
    var avg = total/arr.length;
    newArr.push(avg);

    return newArr;

}
console.log(min_max_avg([1,5,10,-2]));

12.
function swap(arr) {
    var temp = arr[0];
    
    arr[0] = arr[arr.length -1];
    arr[arr.length - 1] = temp;
}
var tester = [1,4,10,-2];
swap(tester);
console.log(tester);
12.
function dojo(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            arr[i] = "Dojo";
        }
    }
    console.log(arr);    
} 
console.log(dojo([-1,-3,2]));

