function sumNumbers(n) {
    let sum = 0;
    let i = 0;
    while (i < n) {
      sum += i;
      i++;
    }

    console.log(sum);
  }
sumNumbers(5)




function calculateGrade(score) {
    if (score >= 90) {
        console.log("Grade: A");
    } else if (score <= 89) {
        console.log("Grade: B");
    } else if (score <= 79) {
        console.log("Grade: C");
    } else if (score >= 69) {
        console.log("Grade: D");
    } else {
        console.log("Grade: F");
    }
}
calculateGrade(70);








let a = 5;
let b = 10;
let c = 3;

if( a > b || a < c) {
    console.log(a);
}

else if (b > a && b > c) {
    console.log(b);
}
else {
    console.log(c);
}




function generateSeries(n) {
    let str = "";
    for (let i = 1; i <= n; i++) {
        let term = i*i; 
        str += term + " ";
    }
    return str;
}

// Example usage
let n = 5;
let result = generateSeries(n);
console.log(`The first ${n} terms of the series are: ${result}`);




function isMultipleOfSeven(N) {
    if (N % 7 === 0) { 
        console.log("No");
    } else {
        console.log("YES");
    }
}

// Example usage
let N = 49;
isMultipleOfSeven(N);