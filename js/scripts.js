//frontend
$(document).ready(function(){
  $("#homeButton").click(function(event){
    event.preventDefault();
    $("#row1").hide();
    $("#row2").show();
    $("#row3").show();
    $("#infoRow").show();
  });

  $("#firstButton").click(function(){
    $("#row1").hide();
    $("#row2").show();
    $("#row3").show();
    $("#infoRow").show();
  })

  $("form#vegOptions").submit(function(event){
    event.preventDefault();
    clearfield();
    userInput.Veggie = [];
    userInput.Base = $("input:radio[name=base]:checked").val();
    userInput.Protein = $("input:radio[name=protein]:checked").val();
    userInput.Sauce = $("input:radio[name=sauce]:checked").val();
    $(":checkbox:checked").each(function(i){
      userInput.Veggie[i]=$(this).val();
    });
    userInput.recipeName(userInput.Protein, userInput.Sauce);
    userInput.cookBase(userInput.Base);
    userInput.cookProtein(userInput.Protein);
    userInput.veggies(userInput.Veggie);
    userInput.prepareSauce(userInput.Sauce);
    userInput.combineItems();
    $("#row4").show();
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
  $("#sauceOutput").text("");
  $("#recipe_name").text("");
}
//intruction on how to cook the bases
recipe.prototype.rice = function(){
  $("#baseOutput").append("<h2>How to cook your rice:</h2>-The ratio for cooking rice is generally 2 to 1. I.E. for every cup rice you'll need two cups of water!<br>-Bring desired amount of water to a boil<br>-Once the water is boiling, add the rice, stir, cover, and turn to low for 45 minutes.<br>-Optional: you can also season your rice by adding a little slice of butter, or whatever spices you have on hand<br>-After 45 minutes, stir your rice to ensure all of the loose luqid has cooked out");
}
recipe.prototype.beans = function(){
  $("#baseOutput").append("<h2>How to cook your beans:</h2>-If you're not using a can of pre-cooked beans, this is how to cook them!<br>-Put the beans in a pot on the stove, cover with water by two inches, add salt if you like, and bring to a boil.<br>-Turn off the heat and let them soak for an hour.<br>-Drain, rinse and your beans are now cooked enough to be added to your recpie!<br>-Hint: If you cook your beans this way its usually a good idea to cook them with everything else if your recipe permits it!");
}
recipe.prototype.potatos = function(){
  $("#baseOutput").append("<h2>How to cook your Potatoes:</h2>-Dice potatoes in 1/4 inch cut. Place them on a plate and cover them with a wet paper towel.<br>-Microwave them for 4-5 minutes on High<br>-Pan fry the potatoes on high heat with a little bit of olive oil, and season to taste<br>-Fry until they are golden brown and crispy!");
}
recipe.prototype.chickpeas = function(){
  $("#baseOutput").append("<h2>How to cook your chickpeas:</h2>-If you're not using a can of pre-cooked beans, this is how to cook them!<br>-Put the beans in a pot on the stove, cover with water by two inches, add salt if you like, and bring to a boil.<br>-Turn off the heat and let them soak for an hour.<br>-Drain, rinse and proceed with your recipe.");
}
recipe.prototype.pasta = function(){
  $("#baseOutput").append("<h2>How to cook your Pasta:</h2>-Bring a pot of water with a dash of salt to a boil<br>-Toss uncooked pasta in to your pot, and let boil for 5-20 minutes, constantly check the tenderness of your pasta until it is ready to eat.<br>-Strain Pasta into colander, set aside and you're pasta is now cooked!<br>-Pro Tip: Run cold water over the pasta while it's in the colander if you think it might be over cooked");

}
recipe.prototype.quinoa = function(){
  $("#baseOutput").append("<h2>How to cook Quinoa:</h2>-The ratio for cooking quinoa is alot like cooking rice, it's generally 2 to 1. I.E. for every cup quinoa you'll need two cups of water!<br>-Once the desired amount of water is boiling, add the quinoa, stir, cover, and turn to low for 15-20 minutes until all of the liquid is gone.<br>-Optional: you can also season your rice by adding a little slice of butter, or whatever spices you have on hand-After 15-20 minutes, stir your quinoa and you're ready to go!");
}
//instruction on how to cook the proteins
recipe.prototype.beef = function(){
  $("#proteinOutput").append("<h2>How to cook Beef:</h2>-Dice your beef into 1/4 inch cubes<br>-Optional: Marinade your beef in 3 parts sauce, 1 part oil.<br>-Seer on a hot pan with a little bit of oil and season to taste<br>-Make sure meat is cooked to desired doneness<br>-Your beef is ready for your dish!");
}
recipe.prototype.pork = function(){
  $("#proteinOutput").append("<h2>How to cook Pork:</h2>-Dice your pork into 1/4 inch cubes or thin strips<br>-Optional: Marinade your pork in 3 parts sauce, 1 part oil.<br>-Cook in a hot pan with a little bit of oil and season to taste<br>-Make sure your pork is cooked all the way through.<br>-Your pork is ready for your dish!");
}
recipe.prototype.chicken = function(){
  $("#proteinOutput").append("<h2>How to cook Chicken:</h2>-Dice your chicken into 1/4 inch cubes or thin strips<br>-Optional: Marinade your chicken in 3 parts sauce, 1 part oil.<br>-Cook in a hot pan with a little bit of oil and season to taste<br>-Make sure your chicken is cooked thoroughly all the way thoroughly<br>-Your chicken is ready for your dish!");
}
recipe.prototype.tofu = function(){
  $("#proteinOutput").append("<h2>How to cook Tofu:</h2>-Dice your tofu into 1/4 inch cubes<br>-Optional: Marinade your tofu in 3 parts sauce, 1 part oil.<br>-Cook in a hot pan a little bit of oil and season to taste<br>-Once the Tofu has color and is as crispy as you would like it, you're good to go!")
}
recipe.prototype.tempeh = function(){
  $("#proteinOutput").append("<h2>How to cook Tempeh:</h2>-Dice your Tempeh into 1/4 inch cubes or strips<br>-Optional: marinade your tempeh in equal parts half orange juice, half soy sauce<br>-Cook in a hot pan with a little bit of oil and season to taste<br>-Once the Tempeh has color and is as crispy as you would like it, you're good to go!");
}
recipe.prototype.soyCurl = function(){
  $("#proteinOutput").append("<h2>How to cook Soy Curls:</h2>-Empty Soy curls into a bowl of warm water and let soak for 8-10 minutes<br>-Drain excess water from bowl<br>-Add you favorite seasonings<br>-Lightly sautee to desired tenderness/crispness<br>-You're Soy Curls are ready to go!");
}

// instructions on how to cook veggies:
recipe.prototype.veggies = function(veggie){
  $("#veggieOutput").append("<h2>How to cook your Veggies!</h2>-Get a pan hot with a little bit of oil.<br>-The veggies you have are: " + " " + veggie + " toss in the veggies that take longest to cook FIRST.<br>-Then, once the veggies you first tossed in are starting to go translucent, toss in the rest of your veggies and season to taste.<br>-Once the rest of the veggies are cooked to your liking, turn the heat off and your veggies are ready to go!");
}
// instructions on how to prepare your sauces!
recipe.prototype.bbq = function(){
  $("#sauceOutput").append("<h2>How to prepare your BBQ sauce!</h2>-If you're using Sweet Baby Ray's BBQ sauce, don't worry about a single thing. This fine sauce will do all of the work for you.<br>-If you're not using Sweet Baby Ray's, then here is a few different ways to spice up your SAUCE.<br>-Take some chili flake or one of your favorite hot sauces and add it to your BBQ.<br>-Take some Garlic or ginger and mix it into your sauce<br>-If you're feeling really crazy add some lime juice and a little pinch of honey(or brownsugar)");
}
recipe.prototype.curry = function() {
  $("#sauceOutput").append("<h2>How to prepare your curry:</h2>-If you have store bought, premade curry, that will be totaly fine for your meal! If you don't have curry on hand, here's a quick way to make it!<br>-Take some Onion and Garlic and brown them in a pot(you can also throw ANY veggies that you want in your curry).<br>-Once they are browned, add coconut milk or cream of coconut to your pot.<br>-Add a curry powder until desired taste.<br>-Let simmer for 10-20 minutes until it thickens up and you're ready to go!");
}
recipe.prototype.teryaki = function(){
  $("#sauceOutput").append("<h2>How to prepare your Teryaki:</h2>-In most cases it's just best to use store bought Teryaki!");
}
recipe.prototype.tahini = function(){
  $("#sauceOutput").append("<h2>How to prepare your Tahini:</h2>In most cases, store bought Tahini is rad and super tastey, and way easier to use right out the get-go! However, if you have a food processor and seasame seeds, it's incredibly easy to make your own! <br> First, lightly roast your seasame seeds in a dry pan. <br> Throw the seasame seeds in your food processor with some garlic, lemon juice, olive oil, salt and pepper, blend, and BOOM. You now have some kick-ass Homemade Tahini sauce!")
}
recipe.prototype.marinara = function(){
  $("#sauceOutput").append("<h2>How to prepare your marinara:</h2>-In most cases it's just best to use store bought marinara!");
}
//the name of a recipe is the type of protein + nickname for the sauce
recipe.prototype.recipeName = function(protein, sauce){
  if(sauce === "bbq"){
    var sauceNickname = "Cowboy";
  }else if(sauce === "curry"){
    var sauceNickname = "Spicyboy";
  }else if(sauce === "teryaki"){
    var sauceNickname = "Fusion";
  }else if(sauce === "tahini"){
    var sauceNickname = "Meanseed";
  }else if(sauce === "marinara"){
    var sauceNickname = "Killer Tomato"
  }
  $("#recipe_name").append("THE" + " " + protein.toUpperCase() + " " + sauceNickname.toUpperCase());
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
// APPEND PROTEIN RECIPE TO HTML
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
//append sauce on html
recipe.prototype.prepareSauce = function(sauce){
  if(sauce === "bbq"){
    return userInput.bbq();
  }else if(sauce === "curry"){
    return userInput.curry();
  }else if(sauce === "teryaki"){
    return userInput.teryaki();
  }else if(sauce === "tahini"){
    return userInput.tahini();
  }else if(sauce === "marinara"){
    return userInput.marinara();
  }
}

recipe.prototype.combineItems = function() {
  $("#totalOutput").append("<h2>Options for how to consume your delicious meal!</h2><h3><strong>Bowl Method:</strong></h3>-Put your Base at the bottom of your bowl. Add your proteins and veggies on top of your base. Drizzle some of that SAUCE on it and you're ready to eat!<br><h3><strong>Wrap Method:</strong></h3>-Take a tortilla and put some of your base in the middle. Add some of your proteins and veggies on the side of your base(make sure not to add too much of each of these and you can't actually wrap it all up!). Drizzle some of your SAUCE on it, wrap it like you would a burrito and you're ready to head to flavor town!")
}
