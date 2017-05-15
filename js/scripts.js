(document).ready(function(){
  userInput.Base = $("form_id_base").val();
});


function recipe(base, meat, veg, sauce){
  this.Base = base;
  this.Meat = meat;
  this.Veg = veg;
  this.Sauce = sauce;
}

var userInput = new recipe();
//intruction on how to cook the bases
recipe.prototype.rice = function(){
  $("#id").append("<p>This is how you cook rice.</p>")
})
recipe.prototype.beans = function(){
  $("#id").append("<p>This is how you cook beans.</p>")
})
recipe.prototype.potatos = function(){
  $("#id").append("<p>This is how you cook potatos.</p>")
})
recipe.prototype.chickapeas = function(){
  $("#id").append("<p>This is how you cook chickapeas.</p>")
})
recipe.prototype.pasta = function(){
  $("#id").append("<p>This is how you cook pasta.</p>")
})
recipe.prototype.quinoa = function(){
  $("#id").append("<p>This is how you cook quinoa.</p>")
})
//instruction on how to cook the proteins
recipe.prototype.beef = function(){
  $("#id").append("<p>This is how you cook beef.</p>")
})
recipe.prototype.pork = function(){
  $("#id").append("<p>This is how you cook pork.</p>")
})
recipe.prototype.chicken = function(){
  $("#id").append("<p>This is how you cook chicken.</p>")
})
recipe.prototype.tofu = function(){
  $("#id").append("<p>This is how you cook tofu.</p>")
})
recipe.prototype.tempeh = function(){
  $("#id").append("<p>This is how you cook tempeh.</p>")
})
recipe.prototype.soyCurl = function(){
  $("#id").append("<p>This is how you cook soyCurl.</p>")
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
    if(protein[i]==="beef"){
      var proteinInstruction = userInput.beef;
    }else if(protein[i]==="pork"){
      var proteinInstruction = userInput.pork;
    }else if(protein[i]==="chicken"){
      var proteinInstruction = userInput.chicken;
    }else if(protein[i]==="tofu"){
      var proteinInstruction = userInput.tofu;
    }else if(protein[i]==="tempeh"){
      var proteinInstruction = userInput.tempeh;
    }else if(protein[i]==="soyCurl"){
      var proteinInstruction = userInput.soyCurl;
    }
  }
}
