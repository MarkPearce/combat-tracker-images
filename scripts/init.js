/*
Hooks.on("init", function() {
  console.log("This code runs once the Foundry VTT software begins its initialization workflow.");
});
*/

Hooks.once("ready", () => {
  console.log("Combat-Tracker-Images | hooked in");
  // Set up socket listener 
  /*
  game.socket.on("module.combat-tracker-images", (data) => {
    console.log("hook" + data);
  });
  */
});
//import { updateCombatTrackerImages } from "./scripts.js";


Hooks.on("createCombatant", function(combatant) {

//  console.log (combatant.data._id);
let actor = game.actors.get(combatant.data.actorId);
//let flags = actor.data.flags;
//console.log("flags: ", flags);
let filepath = actor.getFlag('combat-tracker-images','trackerImage');
if (filepath != undefined) {
  let imgUpdate = [{_id:combatant.data._id,"img": filepath}];
  game.combat.updateEmbeddedDocuments("Combatant", imgUpdate);
}

});
