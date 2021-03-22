const textElement = document.getElementById('text')
const optionButtonsElement = document.getElementById('option-buttons')

let state = {}

function startGame() {
  state = {}
  showTextNode(1)
}

function showTextNode(textNodeIndex) {
  const textNode = textNodes.find(textNode => textNode.id === textNodeIndex)
  textElement.innerText = textNode.text
  while (optionButtonsElement.firstChild) {
    optionButtonsElement.removeChild(optionButtonsElement.firstChild)
  }

  textNode.options.forEach(option => {
    if (showOption(option)) {
      const button = document.createElement('button')
      button.innerText = option.text
      button.classList.add('btn')
      button.addEventListener('click', () => selectOption(option))
      optionButtonsElement.appendChild(button)
    }
  })
}

function showOption(option) {
  return option.requiredState == null || option.requiredState(state)
}

function selectOption(option) {
  const nextTextNodeId = option.nextText
  if (nextTextNodeId <= 0) {
    return startGame()
  }
  state = Object.assign(state, option.setState)
  showTextNode(nextTextNodeId)
}

const textNodes = [
  {
    id: 1,
    text: 'You go to bed and your stomach starts grumbling even louder. Do you ',
    options: [
      {
        text: 'go to sleep anyways',
        setState: { sleep: true },
        nextText: 2
      },
      {
        text: 'play phone games to forget about the hunger',
        nextText: 4
      }
    ]
  },
  {
    id: 2,
    text: 'You drift off to sleep and start dreaming of floating drumsticks.',
    options: [
      {
        text: 'Reach out and eat the drumstick.',
        requiredState: (currentState) => currentState.sleep,
        setState: { sleep: false, drumstick: true },
        nextText: 3
      },
      {
        text: 'You are vegatarian, you cant eat that',
        requiredState: (currentState) => currentState.sleep,
        setState: { sleep: false, veg: true },
        nextText: 5
      }
    ]
},

  {
    id: 3,
    text: 'You wake up and to your horror find that you have chewed off your arm in your sleep!',
    options: [
 {
        text: 'Try Again',
        nextText: -1
      }
    ]
  },

  {
    id: 4,
    text: 'you get a gaming addiction and your parents send you off to a Chinese internet addiction camp; ten years later you have still to return home.',
    options: [
      {
        text: 'Try Again',
        nextText: -1
      }
    ]
  },
  {
    id: 5,
    text: 'You woke up from being too hungry. Do you',
    options: [
      {
        text: 'Order food on UberEats.',
                requiredState: (currentState) => currentState.veg,
        setState: { sleep: false, uberEats: true },
        nextText: 6
      },
      {
        text: 'go back to sleep, you are too tired to do anything about it right now. It will go away.',
        requiredState: (currentState) => currentState.veg,
        nextText: 11
      },
    ]
  },

{
    id: 6,
    text: 'You open the UberEats app, you select',
    options: [
      {
        text: 'Burger King - Impossible Whopper',
        nextText: 7
      },
      {
        text: 'Chipotle - Bean Burrito',
        requiredState: (currentState) => currentState.veg,
        nextText: 8
      },
      {
        text: 'Carvels - Chocolate Milkshake',
        requiredState: (currentState) => currentState.veg,
        nextText: 9
      },
      {
        text: 'Juice Bar -Kale Kombucha Shake',
        requiredState: (currentState) => currentState.veg,
        nextText: 10
      }
    ]
  },


  {
    id: 7,
    text: 'The following day it is seen all over the news that the impossible whopper was made from unknown synthetic materials and cause a strange virus. A week later you have strange symptoms; turns out that everyone who has eatten the Impossible Whopper are slowly having cravings for human flesh.',
    options: [
      {
        text: 'Try Again',
        nextText: -1
      }
    ]
  },


  {
    id: 8,
    text: 'You get extremely gassy and irritable. The whole morning you are constipated; while commuting to school you feel that you can pass gas. You let it go to relieve yourself a bit. But you are mistaken; you have sharted on the bus and you are 10 miles from home.',
    options: [
      {
        text: 'Try Again',
        nextText: -1
      }
    ]
  },
  {
    id: 9,
    text: 'Poor choice. You are severely lactose intolerant. You get extremely gassy and irritable. The whole morning you are constipated; while commuting to school you feel that you can pass gas. You let it go to relieve yourself a bit. But you are mistaken; you have sharted on the bus and you are 10 miles from home.',
    options: [
      {
        text: 'Try Again',
        nextText: -1
      }
    ]
  },
  {
    id: 10,
    text: 'Such a wise and health conscious choice! Having such good gut health clears up all the mental fog. Your studies begin to excel rapidly and you become an award winning brain surgeon in the next 7 years.',
    options: [
      {
        text: 'Congrats! Try Again?',
        nextText: -1
      }
    ]
  },
  {
    id: 11,
    text: 'You lay awake in bed so long that you fall into a sleep paralysis and the sleep paralysis demon gets ahold of you. You try to scream but to no avail. The sleep demon drags you away to the underworld. 10 years later your family is still trying to find you.',
    options: [
      {
        text: 'Try Again',
        nextText: -1
      }
    ]
  }
]


