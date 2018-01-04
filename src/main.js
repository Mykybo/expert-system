let questions = [
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
  "24. Was the game made in the Czech Republic?"
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
  [ 0.5, 0.6, 0.5, 0.5, 0.3, 0.3, 0.3, 0.5, 0.5, 0.4, 0.9, 0.2, 0.5, 0.5, 0.3, 0.5, 0.4, 0.8, 0.7, 0.6, 0.3, 0.3, 0.9, 0.1 ],
  [ 0.1, 0.5, 0.5, 0.5, 0.3, 0.3, 0.3, 0.5, 0.5, 0, 0.5, 0, 0.5, 0.5, 0.3, 0.5, 0.4, 0.8, 0.7, 0.6, 0.3, 0, 0.9, 0.1 ],
  [ 0.3, 0.5, 0.5, 0.5, 0.3, 0.3, 0.3, 0.5, 0.5, 0, 0.6, 0, 0.5, 0.5, 0.3, 0.5, 0.4, 0.8, 0.7, 0.6, 0.3, 0.7, 0.9, 0.1 ],
  [ 1, 0.5, 0.5, 0.5, 0.3, 0.3, 0.3, 0.5, 0.5, 0, 1, 0, 0.5, 0.5, 0.3, 0.5, 0.4, 0.8, 0.7, 0.6, 0.3, 0, 0.4, 0.1 ],
  [ 0, 0.5, 0.5, 0.5, 0.3, 0.3, 0.3, 0.5, 0.5, 0.4, 0.5, 0, 0.5, 0.5, 0.3, 0.5, 0.4, 0.8, 0.7, 0.6, 0.3, 0, 0.4, 0.1 ],
  [ 0.9, 0.5, 0.5, 0.5, 0.3, 0.3, 0.3, 0.5, 0.5, 0, 0.7, 0, 0.5, 0.5, 0.3, 0.5, 0.4, 0.8, 0.7, 0.6, 0.3, 0, 0.9, 0.1 ],
  [ 0.4, 0.3, 0.8, 0.3, 0.3, 0.3, 0.3, 0.5, 0.5, 0, 1, 0, 0.5, 0.5, 0.3, 0.5, 0.4, 0.8, 0.7, 0.6, 0.3, 0, 0.9, 0.1 ],
  [ 0.3, 0.5, 0.5, 0.5, 0.3, 0.3, 0.3, 0.5, 0.5, 0.8, 0.4, 0, 0.5, 0.5, 0.3, 0.5, 0.4, 0.8, 0.7, 0.6, 0.3, 0, 0.9, 0.1 ],
  [ 0.5, 0.5, 0.5, 0.5, 0.3, 0.3, 0.3, 0.5, 0.5, 0, 1, 0.4, 0.5, 0.5, 0.3, 0.5, 0.4, 0.8, 0.7, 0.6, 0.3, 0, 0.7, 0.1 ],
  [ 0.3, 0.5, 0.5, 0.5, 0.3, 0.3, 0.3, 0.5, 0.5, 0.2, 1, 0, 0.5, 0.5, 0.3, 0.5, 0.4, 0.8, 0.7, 0.6, 0.3, 0.8, 0.6, 0.1 ],
  [ 0.7, 0.5, 0.5, 0.5, 0.3, 0.3, 0.3, 0.5, 0.5, 0.1, 0.3, 0.9, 0.5, 0.5, 0.3, 0.5, 0.4, 0.8, 0.7, 0.6, 0.3, 0, 0.8, 0.1 ],
  [ 0.8, 0.5, 0.5, 0.5, 0.3, 0.3, 0.3, 0.5, 0.5, 0, 1, 0, 0.5, 0.5, 0.3, 0.5, 0.4, 0.8, 0.7, 0.6, 0.3, 0, 0.9, 0.1 ],
  [ 0.2, 0.5, 0.5, 0.5, 0.3, 0.3, 0.3, 0.5, 0.5, 0.2, 0.7, 0.3, 0.5, 0.5, 0.3, 0.5, 0.4, 0.8, 0.7, 0.6, 0.3, 0, 0.8, 0.1 ],
  [ 0.6, 0.5, 0.5, 0.5, 0.3, 0.3, 0.3, 0.5, 0.5, 0.5, 0.5, 0.6, 0.5, 0.5, 0.4, 0.5, 0.4, 0.5, 0.7, 0.4, 0.4, 0.6, 0.5, 0.5 ],
]

let state = []

let index = 0

let system = {
  next() {
    let q = questions[index++]
    return q
  },
  ask() {
    let question = system.next()
    if (!question) {
      system.end()
      return
    }
    // first question
    $('#question').text(question)
    console.log(state)
  },
  reset() {
    console.log('reset called')

    index = 0
    state = []
    system.ask()
  },
  end() {
    $('#controls').hide()
    let results = 0
    let ul = $('<ul class="answers" id="answers"></ul>')
    for (const i in state) {
      if (state[i] > 0) {
        let li = $(`<li>${answers[i]} - ${Math.round(state[i] * 100) / 100}</li>`)
        ul.append(li)
        results++
      }
    }
    if (results > 0) {
      $('#question').text('Answer(s)')
      $('#question').append(ul)
      $('#question').addClass('reset-height')
      $('.container').addClass('reset-height')
    } else {
      $('#question').text('No answer')
    }
    let reset = $('<a href="#" class="button reset" id="reset">Reset</a>')
    $('#question').append(reset)
    // reset event
    reset.click(() => {
      $('#question').removeClass('reset-height')
      $('.container').removeClass('reset-height')
      $('#controls').show()
      $('#answers').remove()
      // ask next
      system.reset()
    })
  }
}

$(document).ready(() => {
  // ask first one
  system.ask()
  // answers
  $('#no').click(() => {
    let lastIndex = index - 1
    if (state.length == 0) {
      for (const i in relations) {
        state[i] = 1 - relations[i][lastIndex]
      }
    } else {
      for (const i in relations) {
        state[i] = Math.min(1 - relations[i][lastIndex], state[i])
      }
    }
    // ask next
    system.ask()
  })
  $('#yes').click(() => {
    let lastIndex = index - 1
    if (state.length == 0) {
      for (const i in relations) {
        state[i] = relations[i][lastIndex]
      }
    } else {
      for (const i in relations) {
        state[i] = Math.min(relations[i][lastIndex], state[i])
      }
    }
    // ask next
    system.ask()
  })
  $('#idk').click(() => {
    // ask next
    system.ask()
  })
})
