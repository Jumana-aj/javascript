function vowelcons(char){
    if(char=="a"||char=="e"||char=="i"||char=="o"||char=="u"||char=="A"||char=="E"||char=="I"||char=="O"||char=="U"){
        console.log("the character is vowel")
    }
    else(
        console.log("the character is consonent")
    )
}
vowelcons("a")


function numbers(d,e,f){
    if((d>e)&&(d>f)){
        console.log(d);
    }
    else if((e>d)&&(e>f)){
        console.log(e);
    }
    else(
        console.log(f)
    )
    }
numbers(10,30,5);




function oddnum(numb){
    for(i=0;i<=numb;i++){
        if(i%2==1){
            console.log(i);
        }
    }
}
oddnum(7);

function discount(dis){
    let initialdis=5;
    let dailydis=2;
  for(i=1;i<dis;i++){
    initialdis+=dailydis;
  }
  return initialdis;
}
console.log((discount(10)));


function multipleof5(a,b){
    for(let i=a;a<=b;a++){
        if(a%5==0){
            console.log(a)
        }
    }
    return a;
}
multipleof5(10,30);

function multiof6(e,f){
    for(i=e;e<=f;e++){
        if(e%6==0){
            console.log(e);
        }
        }
        return e;
}
multiof6(15,29);



//prblm-11:
function printMultiplicationTable(n, r) {
    for (let i = r; i >= 1; i--) {
        console.log(${n} * ${i} = ${n * i});
    }
  }
  printMultiplicationTable(5, 6);
  
  //prblm-12:
//   let lap = 1;
//   while (lap <= 10) {
//       console.log(Robot completed lap ${lap});
//       lap++;
//   }
  
  //prblm-13:
//   let batteryLevel = 100;
//   while (batteryLevel > 20) {
//       console.log(Battery level: ${batteryLevel}%);
//       batteryLevel -= 5;
//   }
//   console.log("Battery is low");
  
  //prblm-14:
//   let x = 0, y = 0; 
//   function moveRobot(direction) {
//       switch (direction) {
//           case 'North':
//               y += 1;
//               break;
//           case 'South':
//               y -= 1;
//               break;
//           case 'East':
//               x += 1;
//               break;
//           case 'West':
//               x -= 1;
//               break;
//           default:
//               console.log("Invalid direction! Please enter North, South, East, or West.");
//               return;
//       }
//       console.log(Robot moved ${direction}. New position: (${x}, ${y}));
//   }
//    moveRobot('South');   
  
//   //prblm-15:
//   let alti= 1000;
//   while (alti > 0) {
//       alti -= 10; 
//   }
//   console.log("Flight arrived");
  
//   //prblm-16:
  
//   function assignRunway(destination) {
//     let runway;
  
//     switch (destination.toLowerCase()) {
//         case 'new york':
//             runway = 'Runway 1';
//             break;
//         case 'los angeles':
//             runway = 'Runway 2';
//             break;
//         case 'chicago':
//             runway = 'Runway 3';
//             break;
//         case 'miami':
//             runway = 'Runway 4';
//             break;
//         case 'san francisco':
//             runway = 'Runway 5';
//             break;
//         default:
//             runway = 'Invalid destination';
//     }
  
//     console.log(Destination: ${destination} - Assigned: ${runway});
//   }
//   assignRunway('New York');
  
  //prblm-17:
//   let altitude = 0;      
//   let targetAltitude = 1000;
//   let intervals = 10;    
//   let climbRate = targetAltitude / intervals; 
//   for (let i = 1; i <= intervals; i++) {
//       altitude += climbRate;
//       console.log(Interval ${i}: Altitude is ${altitude} feet);
//   }
  
  
  
  //ARRAY:
  
  //prblm-1:
//   let train_departures = [10, 15, 7, 20, 5];
//   let earliestTrain = Math.min(...train_departures);
//   console.log(The earliest train departs at: ${earliestTrain}:00);
  
  //prblm-2:
//   let seats = [1, 0, 1, 1, 0, 0, 1, 0];
//   let availableSeats = 0;
//   for (let i = 0; i < seats.length; i++) {
//       if (seats[i] === 0) {
//           availableSeats++;
//       }
//   }
//   console.log(Total available seats: ${availableSeats});
  
  //prblm-3:
//   let soldiers = [120, 300, 250, 180, 150];
//   let highestSoldiers = soldiers[0];
//   for (let i = 1; i < soldiers.length; i++) {
//       if (soldiers[i] > highestSoldiers) {
//           highestSoldiers = soldiers[i]; 
//       }
//   }
//   console.log(The region with the highest number of soldiers has: ${highestSoldiers} soldiers);
  
  //prblm-4:
//   let populations = [50, 60, 70, 80, 90];
//   let totalPopulation = 0;
//   for (let i = 0; i < populations.length; i++) {
//       totalPopulation += populations[i]; 
//   }
//   let averagePopulation = totalPopulation / populations.length;
//   console.log(The average population is: ${averagePopulation});
  
  //prblm-5:
  let water_levels = [30, 50, 20, 40, 60];
  let lowestWaterLevel = Math.min(...water_levels);
  console.log("The tank with the lowest water level has:", lowestWaterLevel);
  
  //prblm-6:
//   let days_until_festival = [30, 15, 45, 10, 25];
//   let closest_festival = Math.min(...days_until_festival);
//   console.log(The closest upcoming festival is in ${closest_festival} days.);