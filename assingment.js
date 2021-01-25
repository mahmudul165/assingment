//https://github.com/mahmudul165/assingment


// converter kilometer to meter
function kilometerToMeter(kilo) {
   if(kilo<=0){
      console.log("your input is invalid");
   }
   else{
      var meter= kilo*1000;
      return meter
   }   
}
console.log(kilometerToMeter(5));

//budgetCalculator

function budgetCalculator(watch,phone,laptop) {
   /* watch=50 taka
   phone=100 taka
   laptop=500 taka */

   if (watch < 0 || phone < 0 || laptop < 0) {
      console.log("your input is invalid");
   }
   else{
      var watchPrice=watch* 50;
      var phonePrice=phone* 100;
      var laptopPrice=laptop* 500;
      var TotalPrice= watchPrice + phonePrice + laptopPrice;
      return TotalPrice; 
   }    
}
console.log(budgetCalculator(3,5,2));

/*hotelCost

 first 1 to 10 per  day cost 100 taka
next 11 to 20 per day cost 20% offer (80 taka)
next 21 to .... per day cost 50   taka */

function hotelCost(numberOfDay){
if (numberOfDay <= 0){
console.log("your input is invalid");
}
else if (numberOfDay <= 10) {
   var DaysCost =numberOfDay*100;
}
else if (numberOfDay > 10  && numberOfDay <= 20 ) {

   var next11To20Days =(numberOfDay-10)*80;
   var DaysCost =(10*100)+next11To20Days;   
}
else if (numberOfDay > 20 ) {
   var After20Days =(numberOfDay-20)*50;
   var DaysCost =(10*100)+10*80+ After20Days;   
}
return DaysCost;

}
console.log(hotelCost(26));

//megaFriend
 
function megaFriend(nameList)
  {
    var max_str = nameList[0].length;
    var longWord = nameList[0];
    for (var i = 1; i < nameList.length; i++) {
        var maxi = nameList[i].length;
        if (maxi > max_str) {
            longWord = nameList[i];
            max_str = maxi;
        }
    }
    return longWord;
}
console.log(megaFriend(["hak", "tushar", "mahmudul hasan","hakim", "payel", "julkar"]));
