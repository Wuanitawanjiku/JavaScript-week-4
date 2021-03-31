//Pick a day of the week from my PC

//object constructor function  to create multiple objects 
function Date(){
    this.name= "Wuanita",
    this.age = 20,
    this.month="March",
    this.year=2020

}
let date = new Date();
console.log(date.name);
console.log(date.age);

let week =new Date();
console.log(date.month);
console.log(date.year);





//conditionals (switch)
function days(dayOfWeek){
switch(dayOfWeek){
    case 0:
        nameOfDay = "Sunday";
        console.log(nameOfDay);
        quote = "Time to take a small break!";
        console.log(quote);
        break;
        case 1:
            nameOfDay = "Monday";
            console.log(nameOfDay);
            quote = "Monday blues!";
            console.log(quote);
            break;
            case 2:
                nameOfDay = "Tuesday";
                console.log(nameOfDay);
                quote = "Research,design day!";
                console.log(quote);
                break;
                case 3:
                    nameOfDay = "Wednesday";
                    console.log(nameOfDay);
                    quote = "End month!";
                    console.log(quote);
                    break;
                    case 4:
                        nameOfDay = "Thursday";
                        console.log(nameOfDay)
                        quote = "April Fool's Day!";
                        console.log(quote);
                        break;
                        case 5:
                            nameOfDay = "Friday";
                            console.log(nameOfDay);
                            quote = "Weekend is here!";
                            console.log(quote);
                            break;
                            case 6:
                                nameOfDay = "Saturday";
                                console.log(nameOfDay);
                                quote = "Finally some alone time!";
                                console.log(quote);
                                break;
}
}
console.log(days(4));
//display day of the week

//display quote

