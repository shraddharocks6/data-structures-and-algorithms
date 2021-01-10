// This is the general layout for helper functions
// Commonly done when we need to compile something like an array or list of data

function outer(input) {
  var outerScpedVariable = [];

  function helper(helperInput) {
    //modify the outerScopedVariable
    helper(helperInput--);
  }
  hekper(input);
  return outerScopedVariable;
}
