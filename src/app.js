let pronoun = ["the", "our"];
let adj = ["great", "big"];
let noun = ["jogger", "racoon"];
let domain = [".cl", ".com", ".org"];

window.onload = function() {
  let generatorName = [];
  for (let a = 0; a < pronoun.length; a++) {
    for (let b = 0; b < adj.length; b++) {
      for (let c = 0; c < noun.length; c++) {
        for (let d = 0; d < domain.length; d++) {
          let generatorDomain = pronoun[a] + adj[b] + noun[c] + domain[d];
          generatorName.push(generatorDomain);
        }
      }
    }
  }

  for (var i = 0; i < generatorName.length; i++) {
    console.log(generatorName[i]);
  }
};
