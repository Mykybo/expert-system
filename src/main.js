
let questions = []

questions[0] = 'Is it console?'
questions[1] = 'Is it f2p?'
questions[2] = 'Is it rpg?'
questions[3] = 'Is it moba?'

let answers = ['cod2','gta5','lol']
let relations = [[0,2],[0,3],[2,3],[3]]

let asked = []

let system = {
  next() {
    for (const index in relations) {
      console.log('checking', relations[index])
      for (const q in relations[index]) {
        let realQ = relations[index][q]
        console.log('checking2', realQ)
        if (!asked.includes(realQ)) {
          return realQ
        }
      }
    }
    return false
  },
  ask() {
    let questionNum = system.next()
    console.log('question number:', questionNum)
    // no more questions
    if (questionNum === false) {
      system.end()
    }
    // first question
    $('#question').text(questions[questionNum])
    $('#question').data('question', questionNum)
    asked.push(questionNum)
  },
  end() {
    $('#controls').hide()
    let result = ''
    // get result
    console.log('end', relations)
    for (const index in relations) {
      console.log(index, answers[index])
      result += answers[index] + ', '
    }
    if (relations.length > 0) {
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
    console.log('relations', relations)
    // ask next
    system.ask()
  })
  $('#yes').click(() => {
    let question = Number($('#question').data('question'))
    relations = relations.filter(items => {
      return items.includes(question)
    })
    console.log('relations', relations)
    // ask next
    system.ask()
  })
})
