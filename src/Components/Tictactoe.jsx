import React, { useState } from 'react'

const Tictactoe = () => {
    const [board, setBoard] = useState(Array(9).fill(null));
    const [isX, setIsX] = useState(true);

    const handlerbtn = (index)=>{
        if (board[index] || winner) return; 
        const newboard = [...board];

        if (newboard[index] === null) {
            newboard[index] = isX ? '0' : 'X';
            setBoard(newboard);
            setIsX(!isX)
            
        } else {
            console.log('error found bro')
            
        }

    }
    const resetbtn = ()=>{
        setBoard(Array(9).fill(null));
        setIsX(true);

    }

    const checkwinne  = (board) =>{
        const winnercombo = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8], 
            [0, 3, 6], [1, 4, 7], [2, 5, 8], 
            [0, 4, 8], [2, 4, 6]   
        ]

    
        
        for(let element of winnercombo){
            const [a,b,c] = element
            if (board[a] && board[a] === board[b] && board[a] === board[c]) {
                return board[a];

            } else {
                console.log('error found bro')
            }
        }

        return null

    }

    const winner =  checkwinne(board)


  return (
    <div>
      <h1>Tic-Tac-Toe game in react-js!</h1>
      <div className="container">

  {board.map((value, index) => (
    <div key={index} className="boxes" onClick={() => handlerbtn(index)}>
      {value}
    </div>
  ))}
</div>
{

winner && <h3>🎉 Congratulation! {winner} is the winner!</h3>}

{!winner && !board.includes(null) && <h3>😐 It's a draw!</h3>}

<button onClick={() => resetbtn()}>Reset game!</button>
      
    </div>
  )
}

export default Tictactoe
