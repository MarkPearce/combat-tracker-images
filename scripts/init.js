Hooks.once('ready', () => {
  console.log('Combat-Tracker-Images | hooked in')
})

Hooks.on('createCombatant', function (combatant) {
  if (game.user.isGM) {
    let actor = game.actors.get(combatant.actorId)
    let filepath = actor.getFlag('combat-tracker-images', 'trackerImage')
    if (filepath != undefined) {
      let imgUpdate = [{ _id: combatant._id, img: filepath }]
      game.combat.updateEmbeddedDocuments('Combatant', imgUpdate)
    }
  }
})
