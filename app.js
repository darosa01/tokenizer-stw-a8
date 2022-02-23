function Tokenizer(){
    this.dictionary = [];
    this.run = .....................
    this.on = ......................
    this.onDefault = ...............

}


function testTokenizer(){
  
  var t = ........;
  var countA = 0;
  var testString = ['H','o','l','a',' ','c','o','m',' ','a','n','e','u','?'];


  t.on('a', .....);
  
  t.onDefault(......);

  //here goes the code to run the test over testString
  
  console.log("numero de a's: " + countA);
  console.log("numero de c's: " + .............);
  console.log("numero d'altres caracters: " + ................);
}

testTokenizer();

