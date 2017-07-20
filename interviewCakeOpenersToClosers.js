// You're working with an intern that keeps coming to you with JavaScript code that won't run because the braces, brackets, and parentheses are off. To save you both some time, you decide to write a braces/brackets/parentheses validator.
//Let's say:

//'(', '{', '[' are called "openers."
//')', '}', ']' are called "closers."
//Write an efficient function that tells us whether or not an input string's openers and closers are properly nested.

//Examples:

//"{ [ ] ( ) }" should return true
//"{ [ ( ] ) }" should return false
// "{ [ }" should return false


function isValid(code) {

  var openersToClosers = {
      '(': ')',
      '[': ']',
      '{': '}',
  };

  var openers = new Set(['(', '[', '{']);
  var closers = new Set([')', ']', '}']);

  openersStack = [];

  for (var i = 0; i < code.length; i++) {
      var char = code.charAt(i);

      if (openers.has(char)) {
          openersStack.push(char);
      } else if (closers.has(char)) {
          if (!openersStack.length) {
              return false;
          } else {
              lastUnclosedOpener = openersStack.pop();

              // if this closer doesn't correspond to the most recently
              // seen unclosed opener, short-circuit, returning false
              if (openersToClosers[lastUnclosedOpener] !== char) {
                  return false;
              }
          }
      }
  }
  return openersStack.length === 0;
}
