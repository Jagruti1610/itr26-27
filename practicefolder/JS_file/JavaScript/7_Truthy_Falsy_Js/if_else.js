// If else condition


let pass = 1234;
let username = "avira";

if(pass==1234 && username=="avira"){
    console.log("login successfull");

}
else if(pass==1234 && username!="avira"){
    console.log("wrong username"); 
}
else if(pass!=1234 && username=="avira"){
    console.log("wrong password"); 
}
else{
    console.log("login unsuccessfull"); 
}



let age = 17;

if(age >= 18){
   console.log("User can play ddlc");
}else{
    console.log("User can play mario");

}

let num = 13;

if(num % 2==0){
    console.log("even");
}else{
    console.log("odd");

}