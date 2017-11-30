// Warn if overriding existing method
if (Array.prototype.equals)
  console.warn("Overriding existing Array.prototype.equals. Possible causes: New API defines the method, there's a framework conflict or you've got double inclusions in your code.");

// attach the .equals method to Array's prototype to call it on any array
Array.prototype.equals = function (array) {
  // if the other array is a falsy value, return
  if (!array)
   return false;

  // compare lengths - can save a lot of time
  if (this.length != array.length)
   return false;

  for (var i = 0, l=this.length; i < l; i++) {
    // Check if we have nested arrays
    if (this[i] instanceof Array && array[i] instanceof Array) {
      // recurse into the nested arrays
      if (!this[i].equals(array[i]))
        return false;
    } else if (this[i] != array[i]) {
      // Warning - two different object instances will never be equal: {x:20} != {x:20}
      return false;
    }
  }
  return true;
}
// Hide method from for-in loops
Object.defineProperty(Array.prototype, "equals", {enumerable: false});


let questions = [
  "0. FILLER ZERO",
  "1. Is the game free-to-play?",
  "2. Is it a strategy game?",
  "3. Is it a fps game?",
  "4. Does the game contain microtransactions?",
  "5. Is the game pay to win?",
  "6. Is subscription required to play the game?",
  "7. Is it a mmorpg game?",
  "8. Does the game have single player?",
  "9. Is it a mobile game?",
  "10. Is it a PC game?",
  "11. Can you play the game with a controller?",
  "12. Is it a PS4 game?",
  "13. Is it a xbox game?",
  "14. Is the game no older than one year?",
  "15. Is the game atleast 10 years old?",
  "16. Is it a game for kids?",
  "17. Is it a puzzle game?",
  "18. Is the game on steam?",
  "19. Is the game on origin?",
  "20. Does the game have more than one installment?",
  "21. Is it a sports game?",
  "22. Is it a racing game?",
  "23. Is the game in czech?",
  "24. Was the game made in the Czech Republic?",
  "25. Does the game cost more than 50$ ?",
  "26. Can you play the game on Linux?",
  "27. Is it a web game?",
  "28. Is the game on Origin?",
  "29. Is it a platformer?",
  "30. Is it a moba game?"
]

let answers = [
  "1. Tetris",
  "2. Minecraft",
  "3. GTA V",
  "4. Spore",
  "5. Mario",
  "6. Skyrim",
  "7. Portal",
  "8. World of Warcraft",
  "8. Dota 2",
  "10. Counter Strike",
  "11. Call of Duty",
  "12. Pokemon GO",
  "13. Assassins Creed",
  "14. Arma"
]

let relations = [
  [ 1, 8, 10, 15, 16, 17, 26, 27 ],
  [ 8, 10, 16, 23, 27, 28 ],
  [ 3, 4, 5, 8, 10, 11, 12, 13, 14, 18, 20, 21, 23, 26 ],
  [ 2, 8, 10, 16, 18, 19, 26, 4 ],
  [ 8, 10, 15, 16, 20, 21, 22, 23, 27, 28 ],
  [ 8, 10, 11, 18, 20, 23, 26 ],
  [ 8, 10, 17, 18, 20, 26 ],
  [ 6, 7, 10, 20, 25, 26 ],
  [ 1, 4, 10, 18, 20, 26, 29 ],
  [ 3, 4, 10, 18, 20, 23, 26 ],
  [ 1, 6, 10, 15, 16, 26, 27 ],
  [ 1, 4, 5, 9, 14, 16, 27 ],
  [ 8, 10, 11, 12, 18, 20, 21, 23, 25, 26 ],
  [ 3, 8, 10, 11, 18, 20, 23, 24, 25, 26 ],
]

let backupRelations = relations.slice()

let asked = []

let getRelationsLength = () => {
  return relations.length
}

let system = {
  next() {
    for (const index in relations) {
      for (const q in relations[index]) {
        let realQ = relations[index][q]
        if (!asked.includes(realQ)) {
          return realQ
        }
      }
    }
    return false
  },
  ask() {
    let questionNum = system.next()
    // no more questionsl
    if (questionNum === false || getRelationsLength() == 1 ) {
      system.end()
      return
    }
    console.log('question number:', questionNum)

    // first question
    $('#question').text(questions[questionNum])
    $('#question').data('question', questionNum)
    asked.push(questionNum)

    console.log(relations)
  },
  end() {
    $('#controls').hide()
    let result = ''
    // get result
    console.log('end', relations)

    for (const i in backupRelations) {
      for (const j in relations) {
        if (backupRelations[i].equals(relations[j])) {
          result += answers[i] + ', '
        }
      }
    }
    if (getRelationsLength() > 0) {
      $('#question').text(`Answer(s): ${result}`)
    } else {
      $('#question').text('No answer')
    }
  }
}

$(document).ready(() => {
  // ask first one
  system.ask()
  // answers
  $('#no').click(() => {
    let question = Number($('#question').data('question'))
    relations = relations.filter(items => {
      return !items.includes(question)
    })
    // ask next
    system.ask()
  })
  $('#yes').click(() => {
    let question = Number($('#question').data('question'))
    relations = relations.filter(items => {
      return items.includes(question)
    })
    // ask next
    system.ask()
  })
})
