import { describe, it } from 'mocha'
import { expect } from 'chai'
import deepFreeze from 'deep-freeze'

import { getGame } from './index'

describe('* gamePlayer/selectors:', function(){
  it('gets the game from state', () => {
    const state = 
    {gamePlayer:{
      game: {
          gameId:1,
          gameName: 'Finn',
          gameUrl: 'someurl',
          gameDscription: 'lorem ipsum',
        }
      }
    }
    const result = getGame(state)
    deepFreeze(state)

    expect(result).to.eql({
      gameId:1,
      gameName: 'Finn',
      gameUrl: 'someurl',
      gameDscription: 'lorem ipsum',
    })
  })
})
