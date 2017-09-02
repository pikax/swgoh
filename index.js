/**
 * Created by pikax on 02/09/2017.
 */


var swgoh = require("./dist/index").swgoh;

const username= "pikax";
swgoh.profile(username).then(function (p) {
  console.log(p);

  return swgoh.guild(p.guildUrl);
}).then(console.log);
swgoh.collection(username).then(console.log);
