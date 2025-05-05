import React, { useState } from 'react'

const Practice = () => {
    const [board, setBoard] = useState(Array(9).fill(null));
    const [Xst, setXst] = useState(true)

    const handlerbtn = (index) =>{
        const newboard = [...board];

        if (newboard[index]=== null) {
            newboard[index] = Xst ? '0' : 'X';
            setBoard(newboard)
            setXst(!Xst)
        } else {
            console.log('error found bro')
        }
    }

    const resetbtn = () =>{
        setBoard(Array(9).fill(null));
        setXst (true)
    }


    const tacwinner =(board) =>{
        const winnercombo = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8], 
            [0, 3, 6], [1, 4, 7], [2, 5, 8], 
            [0, 4, 8], [2, 4, 6]   
        ]

        for(let element of winnercombo){
            const [a,b,c] = element;
            if (board[a] && board[a] === board[b] && board[a] ===  board[c]){
                return board[a];

            } else {
                console.log('again error found bro')
            }

        }
        return null;
    }

    const winner = tacwinner(board);
  return (
    <div>
        <h1>Tic-Tac-toe</h1>

        <div className="container">
            {
                board.map((elem,index)=>{
                    return(
                        <div key={index} className="boxes" onClick={() =>{
                            handlerbtn(index)
                        }} >
                        {elem}
                    </div>
                    )
              

                })
            }
        </div>
        {

winner && <h3>🎉 Congratulation! {winner} is the winner!</h3>}

{!winner && !board.includes(null) && <h3>😐 It's a draw!</h3>}


       <button  onClick={() =>{
                            resetbtn()
                        }}>Reset game</button>
    </div>
  )
}

export default Practice
