import { h3 } from 'framer-motion/client';
import React, { useState } from 'react'

const Practice = () => {
    const [board, setboard] = useState(Array(9).fill(null));
    const [Xst, setXst] = useState(true);

    const handlerclick = (index)=>{
        const newboard  = [...board];

        if (board[index] || winner) return; 
        if (newboard[index] === null ) {
            newboard[index] = Xst ? 'X' : '0';
            setboard(newboard);
            setXst(!Xst);

            
        } else {
            console.log('error found')
            
        }

    }

    const resetbtn = ()=> {
        setboard(Array(9).fill(null));
        setXst(true)

    }


    const winnercombo = (board) =>{
        const winnercombo = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8], 
            [0, 3, 6], [1, 4, 7], [2, 5, 8], 
            [0, 4, 8], [2, 4, 6]   
        ]

        for(let element of winnercombo){
            const [a,b,c] = element;
            if (board[a] && board[a] === board[b] && board[a] === board[c] ) {
                return board[a];
                
            } else {
                console.log('phr se eerror found')
            }
        }
        return null;

    }
    const winner = winnercombo(board)
  return (
    <div>
            <h1>Tic tac toe game</h1>

        <div className="container">
            {
                board.map((elem,index)=>{
                    return(
                        <div key={index} className="boxes" onClick={()=>{
                            handlerclick(index)

                        }} >
                            {elem}
                        </div>

                    )
                })
            }

        </div>
        {
            winner && <h3>congratulation {winner} you are a winner</h3>
        }

{
            !winner && !board.includes(null)&& <h3>ohoo match was draw</h3>
        }
        <button  onClick={()=>{
                            resetbtn()

                        }}>Reset game</button>
       
    </div>
  )
}

export default Practice
