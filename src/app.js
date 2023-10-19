console.log("Dominios generado mediante anidado de loops");
let pronoun = ["the", "our"];
let adj = ["great", "big"];
let noun = ["jogger", "racoon"];
let domain = [".com", ".net", ".us", ".es", ".io", ".ir", ".de", ".uy"];

for (const d in domain) {
  for (const p in pronoun) {
    for (const a in adj) {
      for (const n in noun) {
        console.log(pronoun[p] + "" + adj[a] + "" + noun[n] + "" + domain[d]);
      }
    }
  }
}
