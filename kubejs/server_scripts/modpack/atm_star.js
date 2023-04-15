ServerEvents.recipes(event => {
  event.custom({
    type: "create:mechanical_crafting",
    pattern: [
      '    A    ',
      '   AJA   ',
      'AAAJFJAAA',
      'AJJCDEJJA',
      ' ANBIHMA ',
      '  AKGLA  ',
      ' AJJAJJA ',
      'AJJA AJJA',
      'AAA   AAA'
    ],
    key: {
      A: Ingredient.of('allthemodium:unobtainium_allthemodium_alloy_block').toJson(),
      B: Ingredient.of('allthetweaks:nexium_emitter').toJson(),
      C: Ingredient.of('allthetweaks:dragon_soul').toJson(),
      D: Ingredient.of('allthetweaks:withers_compass').toJson(),
      E: Ingredient.of('allthetweaks:pulsating_black_hole').toJson(),
      F: Ingredient.of('allthetweaks:oblivion_shard').toJson(),
      G: Ingredient.of('allthetweaks:improbable_probability_device').toJson(),
      H: Ingredient.of('allthetweaks:dimensional_seed').toJson(),
      I: Ingredient.of('allthetweaks:patrick_star').toJson(),
      J: Ingredient.of('minecraft:bedrock').toJson(),
      K: Ingredient.of('allthetweaks:philosophers_fuel').toJson(),
      L: Ingredient.of('mysticalagradditions:creative_essence').toJson(),
      M: Ingredient.of('minecraft:bedrock').toJson(),
      N: Ingredient.of('minecraft:bedrock').toJson()
    },
    result: Ingredient.of('allthetweaks:atm_star').toJson(),
    acceptMirrored: false
  }).id('kubejs:allthetweaks/atm_star')
  
  event.custom({
    type: "create:mechanical_crafting",
    pattern: [
      '    S    ',
      '   SSS   ',
      'SSSSSSSSS',
      'SSSSSSSSS',
      ' SSSPSSS ',
      '  SSSSS  ',
      ' SSSSSSS ',
      'SSSS SSSS',
      'SSS   SSS'
    ],
    key: {
      S: Ingredient.of('allthetweaks:atm_star_shard').toJson(),
      P: Ingredient.of('allthetweaks:patrick_star').toJson(),
    },
    result: Ingredient.of('allthetweaks:atm_star').toJson(),
    acceptMirrored: false
  }).id('kubejs:allthetweaks/atm_shard_star')
})
