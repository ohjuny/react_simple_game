import React, {Component} from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Context = React.createContext();

class Provider extends Component {
  state = {
    page: 1,
    players: [],
    loser: ''
  }

  addPlayer = (name) => {
    this.setState((prevState) => ({
      players: [...prevState.players, name]
    }))
  }

  removePlayer = (index) => {
    let newArray = this.state.players
    newArray.splice(index, 1)
    this.setState({
      players: newArray
    })
  }

  generateLoser = () => {
    const { players } = this.state
    this.setState({
      loser: players[Math.floor(Math.random() * players.length)]
    })
  }

  nextPage = () => {
    const { players } = this.state
    if (players.length > 1) {
      this.setState({
        page: 2
      }, () => {
        setTimeout(() => {
          this.generateLoser()
        }, 2000)
      })
    }
    else {
      toast.error('Not enough players (make some friends lol)', {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 2000
      })
    }
  }

  resetGame = () => {
    this.setState({
      page: 1,
      players: [],
      loser: ''
    })
  }

  render() {
    return (
      <>
        <Context.Provider value = {{
          state: this.state,
          addPlayer: this.addPlayer,
          removePlayer: this.removePlayer,
          nextPage: this.nextPage,
          generateLoser: this.generateLoser,
          resetGame: this.resetGame
        }}>
          { this.props.children }
        </Context.Provider>
        <ToastContainer/>
      </>
    )
  }
}

export {Context, Provider};