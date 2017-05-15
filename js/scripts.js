(document).ready(function(){
  userInput.Base = $("form_id_base").val();
});


function recipe(base, protein, veggie, sauce){
  this.base = base;
  this.protein = protein;
  this.veggie = veggie;
  this.Sauce = sauce;
}

var userInput = new recipe();
//intruction on how to cook the bases
recipe.prototype.rice = function(){
  $("#id").append("How to cook rice:<br>For every cup of rice you would like to cook, bring two cups of water to a boil ( if you wanted to cook two cups of rice you would bring four cups of water to a boil!).<br> Once the water is boiling, add the rice, stir, cover, and turn to low for 45 minutes. <br> After 45 minutes, stir your rice and you're ready to go!")
})
recipe.prototype.beans = function(){
  $("#id").append("How to cook beans: <br> If you're not using a can of pre-cooked beans, this is how to cook them!<br> Put the beans in a pot on the stove, cover with water by two inches, add salt if you like, and bring to a boil. <br> Turn off the heat and let them soak for an hour.<br> Drain, rinse and proceed with your recipe.")
})
recipe.prototype.potatos = function(){
  $("#id").append("How to cook Potatoes:<br>Dice potatoes in 1/4 inch cut Put them on a plate and cover them with a wet paper towel<br>Microwave them for 4-5 minutes on High<br> Pan fry the potatoes on High with a little bit of olive oil, and season to taste<br>fry until they are golden brown and crispy!")
})
recipe.prototype.chickapeas = function(){
  $("#id").append("How to cook chickapeas:<br>If you're not using a can of pre-cooked beans, this is how to cook them! <br> Put the beans in a pot on the stove, cover with water by two inches, add salt if you like, and bring to a boil.<br>Turn off the heat and let them soak for an hour. <br> Drain, rinse and proceed with your recipe.")
})
recipe.prototype.pasta = function(){
  $("#id").append("How to cook Pasta:<br>Bring a pot of water with a dash of salt to a boil<br>Toss uncooked pasta in to pot, and let boil for 5-20 minutesConstantly check the tenderness of your pasta until it is ready to eat<br>Strain Pasta into colander (run cold water over the pasta if you think it might be over cooked)Set aside, you're pasta is now cooked!")

})
recipe.prototype.quinoa = function(){
  $("#id").append("How to cook Quinoa:<br>For every cup of quinoa you would like to cook, bring two cups of water to a boil(if you wanted to<br>cook two cups of quinoa you would bring four cups of water to a boil!).<br>Once the water is<br>boiling, add the quinoa, stir, cover, and turn to low for 15-20 minutes until all of the liquid is gone.<br>After 15-20 minutes, stir your quinoa and you're ready to go!")
})
//instruction on how to cook the proteins
recipe.prototype.beef = function(){
  $("#id").append("How to cook Beef:<br>Dice your beef into 1/4 inch cubes<br>Optional: marinade your beef in half <span="sauce"></span> and half oil.<br>Seer on a hot pan with a little bit of oil and season to taste<br>Make sure meat is cooked to desired doneness<br>Your beef is ready for your dish!")
})
recipe.prototype.pork = function(){
  $("#id").append("How to cook Pork:<br>Dice your pork into 1/4 inch cubes or thin strips<br>Optional: marinade your pork in half <span="sauce"></span> and half oil.<br>Cook in a hot pan with a little bit of oil and season to taste<br>Make sure your pork is cooked thoroughly all the way thoroughly<br>Your pork is ready for your dish!")
})
recipe.prototype.chicken = function(){
  $("#id").append("How to cook Chicken:<br> Dice your pork into 1/4 inch cubes or thin strips<br>Optional: marinade your chicken in half <span="sauce"></span> and half oil.<br> Cook in a hot pan with a little bit of oil and season to taste<br> Make sure your chicken is cooked thoroughly all the way thoroughly<br>Your chicken is ready for your dish!")
})
recipe.prototype.tofu = function(){
  $("#id").append("How to cook Tofu:<br>Dice your tofu into 1/4 inch cubes<br> Optional: marinade your chicken in half <span="sauce"></span> and half oil.<br>cook in a hot pan a little bit of oil and season to taste<br>Once the Tofu has color and is as crispy as you would like it, you're good to go!")
})
recipe.prototype.tempeh = function(){
  $("#id").append(" How to cook Tempeh:<br>Dice your Tempeh into 1/4 inch cubes or strips<br> Optional: marinade your tempeh in equal parts half orange juice half soy sauce<br>Cook in a hot pan with a little bit of oil and season to taste<br> once the Tempeh has color and is as crispy as you would like it, you're good to go!")
})
recipe.prototype.soyCurl = function(){
  $("#id").append(" How to cook Soy Curls:<br>Empty Soy curls into a bowl of warm water and let soak for 8-10 minutes<br>Drain excess water from bowl<br>Add you favorite seasonings<br>Lightly sautee to desired tenderness/crispness<br>You're Soy Curls are ready to go!")
})
//append the recipe on html
recipe.prototye.cookBase = function(base){
  if(base === "rice"){
    var baseInstruction = userInput.rice;
  }else if(base === "beans"){
    var baseInstruction = userInput.beans;
  }else if(base === "potatos"){
    var baseInstruction = userInput.potatos;
  }else if(base === "chickapeas"){
    var baseInstruction = userInput.chickapeas;
  }else if(base === "pasta"){
    var baseInstruction = userInput.pasta;
  }else if(base === "quinoa"){
    var baseInstruction = userInput.quinoa;
  }
  return baseInstruction;
}
recipe.protype.cookProtein = function(protein){
  for(i=0; i<protein.length; i++){
    var proteinInstruction;
    if(protein[i]==="beef"){
      proteinInstruction += "<p>" + userInput.beef + "</p>";
    }else if(protein[i]==="pork"){
      proteinInstruction += "<p>" + userInput.pork + "</p>";
    }else if(protein[i]==="chicken"){
      proteinInstruction += "<p>" + userInput.chicken + "</p>";
    }else if(protein[i]==="tofu"){
      proteinInstruction += "<p>" + userInput.tofu + "</p>";
    }else if(protein[i]==="tempeh"){
      proteinInstruction += "<p>" + userInput.tempeh + "</p>";
    }else if(protein[i]==="soyCurls"){
      proteinInstruction += "<p>" + userInput.soyCurl + "</p>";
    }
  }
  return proteinInstruction;
}
