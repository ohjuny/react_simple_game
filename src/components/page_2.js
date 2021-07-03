import React, { useContext } from 'react';

import { Context } from '../context';

const Page2 = () => {
  const context = useContext(Context)

  return (
    <>
      <div className="result-wrapper">
        <h3>The loser is:</h3>
        <div>{ context.state.loser }</div>
      </div>
      <div onClick={ () => {context.resetGame()} } className="action-button">
        START AGAIN
      </div>
      <div onClick={ () => {context.generateLoser()} } className="action-button btn-2">
        GET NEW LOSER
      </div>
    </>
  )
}

export default Page2;