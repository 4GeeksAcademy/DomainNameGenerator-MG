console.log("Hola desde app.js!");

let pronoun = ["the", "our"];
let adj = ["great", "big"];
let noun = ["jogger", "racoon"];
let domain = [".com", ".net", ".us", ".es", ".io", ".ir", ".de", ".uy"];

for (let d in domain) {
  for (let p in pronoun) {
    for (let a in adj) {
      for (let n in noun) {
        console.log(pronoun[p] + "" + adj[a] + "" + noun[n] + "" + domain[d]);
      }
    }
  }
}
