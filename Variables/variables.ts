/*
var var_one:string = "Angular5";
var var_two:number= 100;
var var_three:boolean=true;
var var_four:any = "Data From DataBase Soon...!";
var var_five:any[] = ["AngularJS","Angular5","NodeJS","MongoDB"];
var var_six:number[] = [10,20,30,40,50];

document.write("<h1>"+var_one+"</h1><br>");
document.write("<h1>"+var_two+"</h1><br>");
document.write("<h1>"+var_three+"</h1><br>");
document.write("<h1>"+var_four+"</h1><br>");
document.write("<h1>"+var_five+"</h1><br>");
document.write("<h1>"+var_six+"</h1><br>");
*/

let var_one:string = "Angular5";
let var_two:string = 'Angular4';
let var_three:string = `Welcome to...
                        ${var_one}`;
document.write("<h1>"+var_one+"..."+var_two+"..."
                +var_three+"</h1>");


let num_one:number = 100;
let num_two:number = 0x100;
let num_three:number=0b1010;
let num_four:number = 0561;
document.write(num_one+"..."
                        +num_two+"..."
                        +num_three+"..."
                        +num_four);
