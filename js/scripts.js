//frontend
$(document).ready(function(){


  $("#firstButton").click(function(event){
    event.preventDefault();
  $("#row1").hide();
  $("#row2").show();
  $("#row3").show();
  $("#row4").show();
  })


  $("form#baseOptions").submit(function(event){
    event.preventDefault();
    clearfield();
    userInput.Veggie = [];
    userInput.Base = $("input:radio[name=base]:checked").val();
    userInput.Protein = $("input:radio[name=protein]:checked").val();
    userInput.Sauce = $("input:radio[name=sauce]:checked").val();
    $(":checkbox:checked").each(function(i){
      userInput.Veggie[i]=$(this).val();
    })
    console.log(userInput.Veggie);
    console.log(userInput);
    console.log(userInput.Base);
    console.log(userInput.Protein);
    userInput.cookBase(userInput.Base);
    userInput.cookProtein(userInput.Protein);
    userInput.veggies(userInput.Veggie);

  });
});

//Backend
function recipe(base, protein, sauce){
  this.Base = base;
  this.Protein = protein;
  this.Veggie = [];
  this.Sauce = sauce;
}
var userInput = new recipe();
//clear output field before appending new stuff
function clearfield(){
  $("#baseOutput").text("");
  $("#proteinOutput").text("");
  $("#veggieOutput").text("");
}
//intruction on how to cook the bases
recipe.prototype.rice = function(){
  $("#baseOutput").append("How to cook rice:<br>For every cup of rice you would like to cook, bring two cups of water to a boil ( if you wanted to cook two cups of rice you would bring four cups of water to a boil!).<br> Once the water is boiling, add the rice, stir, cover, and turn to low for 45 minutes. <br> After 45 minutes, stir your rice and you're ready to go!");
}
recipe.prototype.beans = function(){
  $("#baseOutput").append("How to cook beans: <br> If you're not using a can of pre-cooked beans, this is how to cook them!<br> Put the beans in a pot on the stove, cover with water by two inches, add salt if you like, and bring to a boil. <br> Turn off the heat and let them soak for an hour.<br> Drain, rinse and proceed with your recipe.");
}
recipe.prototype.potatos = function(){
  $("#baseOutput").append("How to cook Potatoes:<br>Dice potatoes in 1/4 inch cut. Put them on a plate and cover them with a wet paper towel<br>Microwave them for 4-5 minutes on High<br> Pan fry the potatoes on High with a little bit of olive oil, and season to taste<br>fry until they are golden brown and crispy!");
}
recipe.prototype.chickpeas = function(){
  $("#baseOutput").append("How to cook chickpeas:<br>If you're not using a can of pre-cooked beans, this is how to cook them! <br> Put the beans in a pot on the stove, cover with water by two inches, add salt if you like, and bring to a boil.<br>Turn off the heat and let them soak for an hour. <br> Drain, rinse and proceed with your recipe.");
}
recipe.prototype.pasta = function(){
  $("#baseOutput").append("How to cook Pasta:<br>Bring a pot of water with a dash of salt to a boil<br>Toss uncooked pasta in to pot, and let boil for 5-20 minutesConstantly check the tenderness of your pasta until it is ready to eat<br>Strain Pasta into colander (run cold water over the pasta if you think it might be over cooked)Set aside, you're pasta is now cooked!");

}
recipe.prototype.quinoa = function(){
  $("#baseOutput").append("How to cook Quinoa:<br>For every cup of quinoa you would like to cook, bring two cups of water to a boil(if you wanted to<br>cook two cups of quinoa you would bring four cups of water to a boil!).<br>Once the water is<br>boiling, add the quinoa, stir, cover, and turn to low for 15-20 minutes until all of the liquid is gone.<br>After 15-20 minutes, stir your quinoa and you're ready to go!");
}
//instruction on how to cook the proteins
recipe.prototype.beef = function(){
  $("#proteinOutput").append("How to cook Beef:<br>Dice your beef into 1/4 inch cubes<br>Optional: marinade your beef in half  and half oil.<br>Seer on a hot pan with a little bit of oil and season to taste<br>Make sure meat is cooked to desired doneness<br>Your beef is ready for your dish!");
}
recipe.prototype.pork = function(){
  $("#proteinOutput").append("How to cook Pork:<br>Dice your pork into 1/4 inch cubes or thin strips<br>Optional: marinade your pork in half  and half oil.<br>Cook in a hot pan with a little bit of oil and season to taste<br>Make sure your pork is cooked thoroughly all the way thoroughly<br>Your pork is ready for your dish!");
}
recipe.prototype.chicken = function(){
  $("#proteinOutput").append("How to cook Chicken:<br> Dice your chicken into 1/4 inch cubes or thin strips<br>Optional: marinade your chicken in half  and half oil.<br> Cook in a hot pan with a little bit of oil and season to taste<br> Make sure your chicken is cooked thoroughly all the way thoroughly<br>Your chicken is ready for your dish!");
}
recipe.prototype.tofu = function(){
  $("#proteinOutput").append("How to cook Tofu:<br>Dice your tofu into 1/4 inch cubes<br> Optional: marinade your tofu in half and half oil.<br>cook in a hot pan a little bit of oil and season to taste<br>Once the Tofu has color and is as crispy as you would like it, you're good to go!")
}
recipe.prototype.tempeh = function(){
  $("#proteinOutput").append(" How to cook Tempeh:<br>Dice your Tempeh into 1/4 inch cubes or strips<br> Optional: marinade your tempeh in equal parts half orange juice half soy sauce<br>Cook in a hot pan with a little bit of oil and season to taste<br> once the Tempeh has color and is as crispy as you would like it, you're good to go!");
}
recipe.prototype.soyCurl = function(){
  $("#proteinOutput").append(" How to cook Soy Curls:<br>Empty Soy curls into a bowl of warm water and let soak for 8-10 minutes<br>Drain excess water from bowl<br>Add you favorite seasonings<br>Lightly sautee to desired tenderness/crispness<br>You're Soy Curls are ready to go!");
}

recipe.prototype.veggies = function(veggie){
  $("#veggieOutput").append("How to cook your Veggies!<br> Get a pan hot with a little bit of oil.<br> Toss in" + " " + veggie + "<br> Then, once the veggies you first tossed in are starting to go translucent, toss in the rest of your veggies and season to taste. <br> Once the rest of the veggies are cooked to your liking, turn the heat off and your veggies are ready to go!")
}


// instructions on how to cook veggies:
recipe.prototype.veggies = function(){
  $("#veggieOutput").append("How to cook your Veggies!<br> Get a pan hot with a little bit of oil.<br> Toss in what ever veggies take the longest too cook first.<br> Then, once the veggies you first tossed in are starting to go translucent, toss in the rest of your veggies and season to taste. <br> Once the rest of the veggies are cooked to your likeing, turn the heat off and your veggies are ready to go!");
}
// instructions on how to prepare your sauces!
recipe.prototype.bbq = function(){
  $("#sauceOutput").append("How to prepare your BBQ sauce!<br> If you're using Sweet Baby Ray's BBQ sauce, don't worry about a single thing. This fine sauce will do all of the work for you.<br> If you're not using Sweet Baby Ray's, then here is a few different ways to spice up your SAUCE.<br> Take some chili flake or one of your favorite hot sauces and add it to your BBQ. <br> Take some Garlic or ginger and mix it into your sauce <br> If you're feeling really crazy add some lime juice and a little pinch of honey(or brownsugar)");
}
recipe.prototype.curry = function() {
  $("#sauceOutput").append("How to prepare your curry: <br> if you have store bought, premade curry, that will be totaly fine for your meal! If you don't have curry on hand, here's a quick way to make it! <br> Take some Onion and Garlic and brown them in a pot(you can also throw ANY veggies that you want in your curry). <br> Once they are browned, add coconut milk or cream of coconut to your pot. <br> Add a curry until desired taste. <br> let simmer for 10-20 minutes until it thickens up and you're ready to go!");
}
recipe.prototype.teryaki = function(){
  $("#sauceOutput").append("How to prepare your Teryaki: <br> In most cases it's just best to use store bought Teryaki!");
}
recipe.prototype.tahini = function(){
  $("#sauceOutput").append("How to prepare your Tahini: <br> In most cases store bought Tahini is rad and super tastey, and way easier to use right out the get-go! However, if you have a food processor and seasame seeds, it's incredibly easy to make your own! <br> First, lightly roast your seasame seeds in a dry pan. <br> Throw the seasame seeds in your food processor with some garlic, lemon juice, olive oil, salt and pepper, blend, and BOOM. You now have some kick-ass Homemade Tahini sauce!")
}
recipe.prototype.marinara = function(){
  $("#sauceOutput").append("How to prepare your marinara: In most cases it's just best to use store bought marinara!");
}




//append the recipe on html
recipe.prototype.cookBase = function(base){
  if ( base === "rice" ){
    return userInput.rice();
  }else if(base === "beans"){
    return userInput.beans();
  }else if(base === "potatoes"){
    return userInput.potatos();
  }else if(base === "chickpeas"){
    return userInput.chickpeas();
  }else if(base === "pasta"){
    return userInput.pasta();
  }else if(base === "quinoa"){
    return userInput.quinoa();
  }
}
recipe.prototype.cookProtein = function(protein){
  if(protein === "beef"){
    userInput.beef();
  }else if(protein ==="pork"){
    userInput.pork();
  }else if(protein ==="chicken"){
    userInput.chicken();
  }else if(protein ==="tofu"){
    userInput.tofu();
  }else if(protein ==="tempeh"){
    userInput.tempeh();
  }else if(protein ==="soyCurls"){
    userInput.soyCurl();
  }
}
