let i=1;
while(i<=10){
    console.log("The robot completes the lap :"+ i);
    i++;
}
console.log("Robot completes all");




let it=100;
while(i>20){
    console.log("Battery level:"+i+"%");
    it-=5;
}
console.log("Battery is low");





let ie=1000;
while(i>0){
    console.log("Flight is travelling:"+" " + i+"ft");
    i-=10;
}
console.log("Flight has arrived");





for(let i=100;i<=1000;i+=100){
    console.log("Interval"+" "+i+"ft");
  }
  console.log("1000ft in 10th interval");




  
  let Mydestination="Tokyo";
switch(Mydestination){
    case 'Chicago':
        console.log("Chicago")
        break;
    case 'Mexico':
        console.log("Mexico");
        break;
    case 'Tokyo':
        console.log("Tokyo");
        break;
    default:
        console.log("Wrong destination");
        break;
}
