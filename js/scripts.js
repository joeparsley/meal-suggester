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
//intruction for cooking the bases
recipe.prototype.rice = function({
  $("#id").append("<p>This is how you cook rice.</p>")
})
recipe.prototype.beans = function({
  $("#id").append("<p>This is how you cook beans.</p>")
})
recipe.prototype.potatos = function({
  $("#id").append("<p>This is how you cook rice.</p>")
})

//append the recipe on html
recipe.prototye.howtocookbase = function(base, protein, veg, sauce){
  for(i=0; i<base.length; i++){
    if(base[i] === "rice"){
      var output = userInput.rice();
    }
    r

  }
}
