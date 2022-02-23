function Tokenizer(){
    this.dictionary = [];
	this.def = null;
	// Recibe lista como parametro, la recorre, y llama función asociada al caracter en diccionario
	// Si no está en el diccionario se llama onDefault si está definida
	
    this.run = function(list) {
		// "Copiamos" this dentro de la función run para que la función definida dentro de forEach 
		// Pueda acceder a this (tokenizer y no list) por clausura. 
		var self = this;
		list.forEach((function(x){	
			if (self.dictionary[x]) {
				self.dictionary[x]();
			}
			else {
				if (self.def) {
					self.def();
				}
			}
			
		}))
			
	}
	
	// Asociamos función a caracter en el diccionario
    this.on = function(caracter,func) { this.dictionary[caracter] = func; };
    this.onDefault = function(func) { this.def = func; }

}


function testTokenizer(){
  
  // Creación objeto Tokenizer con new
  var t = new Tokenizer();
  
  // Declaración contadores a, c, y !(a||c)
  var countA = 0;
  var countC = 0;
  var countDef = 0;
  
  var testString = ['H','o','l','a',' ','c','o','m',' ','a','n','e','u','?'];


  t.on('a', function(){
	  countA++;
  });

  t.on('c', function(){
	  countC++;
  });  
  
  t.onDefault(function(){
	  countDef++;
  });
  
  t.run(testString);

  //here goes the code to run the test over testString
  console.log("numero de a's: " + countA);
  console.log("numero de c's: " + countC);
  console.log("numero d'altres caracters: " + countDef);
}

testTokenizer();

