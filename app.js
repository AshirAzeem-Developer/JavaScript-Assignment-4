// ----------------------------CHAPTER 1--------------------------------
// Nothing In Chapter 1 File is Empty


// ----------------------------CHAPTER 2--------------------------------
// <<<<<-------------Q1---------->>>>>>>

// var username;
// <<<<<-------------Q2---------->>>>>>>

// var myName="Ashir Azeem";
// <<<<<-------------Q3---------->>>>>>>

// var message="Hello World";
// alert(message);
// <<<<<-------------Q4---------->>>>>>>

//  var StdName="Jhone Doe?";
//  var StdAge="15 Years Old";
//  var Status="Certified MObile Apllication Development";
//  alert(StdName);
//  alert(StdAge);
//  alert(Status);
// <<<<<-------------Q5---------->>>>>>>

// alert("Pizza\n"+"Pizz\n"+"Piz\n"+"Pi\n"+"P\n");

// <<<<<-------------Q6---------->>>>>>>
// var email="ashir9112001@gmail.com";
// alert("my email Address is "+email);

// <<<<<-------------Q7---------->>>>>>>
//  var book ="A Smarter way To learn Javascript";
//  alert("I am Tring to Learn From the Book "+book)

// <<<<<-------------Q8---------->>>>>>>

// document.write("Yeah I can write HTML through JavaScript");
// <<<<<-------------Q9---------->>>>>>>

// alert("▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬");

// ----------------------------CHAPTER 3--------------------------------
// <<<<<-------------Q1---------->>>>>>>

// var age=21;
// alert("I am "+age+" Years Old");

// <<<<<-------------Q2---------->>>>>>>
// var visited=14;
// alert("You have Visited this site"+visited+" Times");

// <<<<<-------------Q3---------->>>>>>>

// var birthYear=2001;
// document.write("My Birth Year is "+birthYear+"<br>");
// document.write(" \nDataType of my Declared Variable is Number");

// <<<<<-------------Q4---------->>>>>>>

// var VisName=prompt("Your Name");
// var ProdTitle=prompt("Product Title?");
// var Quantity=+prompt("Quantity?");
//  document.write(VisName+" Ordered "+ Quantity + ProdTitle+"(S) on XYZ Clothing Center");

// ----------------------------CHAPTER 4--------------------------------
// <<<<<-------------Q1---------->>>>>>>

// var a,b,c="These Are Three Variables";

// <<<<<-------------Q2---------->>>>>>>
//Illegal Variables
// var 1Ashir;
// var Ashir@;
// var @Ashir;
// var Ash.r;
// var Ash-r;
//legal Variables

// var Ashir1;
// var var_;
// var Ash_r;
// var Ashir_1;
// var Ashir1;

// <<<<<-------------Q3---------->>>>>>>

// document.write("1. Declare 3 variables in one statement. "+"<br>"+"2. Declare 5 legal & 5 illegal variable names. "+"<br>"+"\n 3. Display this in your browser \n "+"<br>"+"a) A heading stating “Rules for naming JS variables \n "+"<br>"+"b) Variable names can only contain ______, ______,______ and ______. \n For example $my_1stVariable "+"<br>"+" \n c Variables must begin with a ____________or_____. For example $name, _name or name \n"+"<br>"+" d) Variable names are case _________ \n "+"<br>"+"e) Variable names should not be JS _________"
// )

// ----------------------------CHAPTER 12 -13 --------------------------------
// <<<<<-------------Q1---------->>>>>>>


// var input = prompt("Enter Anything?(Character Number or String)");

// if (input >= 'A' && input <= 'Z') {
//     alert("INPUT IS  UPPERCASE ");

// }
// else if (input >= 'a' && input <= 'z') {
//     alert("input is LowerCase ");

// }
// else {
//     alert("Input is a Number");
// }

// <<<<<-------------Q2---------->>>>>>>

// var int1=+prompt("Enter Number 1 ?");
// var int2=+prompt("Enter Number 2 ?");

// if (int1==int2) {
//     alert("Numbers are Equal")
// } else {
//     if (int1>int2) {
//     alert(int1+" Greater Than "+int2);
        
//     } else {
//     alert(int2+" Greater Than "+int1);
//     }
    
// }
// <<<<<-------------Q3---------->>>>>>>

// var inp=+prompt("Enter Number?");
// if (inp==0) {
//     alert("Number is 0")
// } else {
//     if (inp>0) {
//     alert(inp+" Is a Positive Number ");
        
//     } else {
//     alert(inp+" Is a Negative Number");
//     } 
// }

// <<<<<-------------Q4---------->>>>>>>

// var charInp=prompt("Enter Character?");
// if (charInp=='a' ||charInp=='A'||charInp=='e'||charInp=='E'||charInp=='i'||charInp=='I'||charInp=='o'||charInp=='O'||charInp=='u'||charInp=='U') {
//     alert("Your Input Character is Vowel")
// } else {
    
//    alert("Input is not a Vowel");
// }

// <<<<<-------------Q5---------->>>>>>>

// var password="ABC";
// var CheckedPassword=prompt("Enter Your Password?");
// if (password===CheckedPassword) {
//     alert(" Correct ! PAssword you entered matches the original password");
// } else {
//     alert("Incorrect Password");
// }
// <<<<<-------------Q6---------->>>>>>>

// var greeting;
// var hour = 13;
// if (hour < 18) {
// greeting = "Good day";
// }
// else{
// greeting = "Good evening";
// }

// <<<<<-------------Q7---------->>>>>>>

// var timeInp=prompt("Enter Time is 24 Hours Format Like 1900 =7pm ?");

// if (timeInp>=0000&&timeInp<1200) {
//     alert("Good Morning");
// } 
// else if (timeInp>=1200&&timeInp<1700) {
//     alert("Good Afternoon");
    
// }
// else if (timeInp>=1700&&timeInp<2100) {
//     alert("Good Evening");
    
// }
// else if(timeInp>=2100&&timeInp<2359){
//     alert("Good Night");
// }
// else{
//     alert("Wrong Input");
// }

// ----------------------------CHAPTER 14-16 --------------------------------

// <<<<<-------------Q1---------->>>>>>>

// var StdNames=[];
// <<<<<-------------Q2---------->>>>>>>
// var StdName2;
// StdName2=[];
// <<<<<-------------Q3---------->>>>>>>
// var StringArr=["A","B"];
// <<<<<-------------Q4---------->>>>>>>
// var StringArr=[1,2];
// <<<<<-------------Q5---------->>>>>>>
// var StringArr=[true,false];
// console.log(StringArr[0])

// <<<<<-------------Q6---------->>>>>>>

// var MixArr=["A",1];
// console.log(MixArr)

// <<<<<-------------Q7---------->>>>>>>

// 7. Declare and Initialize an array and store available 
// education qualifications in Pakistan (e.g. SSC, HSC, BCS, 
// BS, BCOM, MS, M. Phil., PhD). Show the listed 
// qualifications in your browser like:


// var Qual=["SSC","HSC","BCS","BS","BCOM","MS"," M. Phil.","PhD"];
// document.write("Qualifications :"+"<br>");

// for (var i = 0; i < Qual.length; i++) {
//     document.write((i+1)+") "+Qual[i]+"<br>");

// }

// <<<<<-------------Q8---------->>>>>>>
// var StdName=["Salal","Mujeeb","Faris"];
// var Scores=[480,450,430];

// var totalMarks=500;

// for (var i = 0; i < StdName.length; i++) {
//     var percentage =(Scores[i]/totalMarks)*100;
//     document.write("Score of "+StdName[i]+" is "+Scores[i]+" . Percentage : "+percentage+"%"+"<br>");
// }
