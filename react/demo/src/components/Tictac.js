import Square from "./Square";
import {useState} from 'react';

function Tictac() {
const [squares,setSquares]=useState(Array(9).fill(null));
const [nextMove,setMove]=useState(true);
function handleClick(i){
    if (winner(squares) || squares[i]) {
        return;
      }
    const curr = squares.slice();
    if(nextMove){
        curr[i]="X";
    }else{
        curr[i]="O";
    }
    setSquares(curr);
    setMove(!nextMove);
}
function winner(squares){
    const possibility=[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ];
    for(let i=0;i<possibility.length;i++){
        const[a,b,c]=possibility[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
          }
    }
    return null;
}
const declare = winner(squares);
let status;
if (declare) {
  status = 'Winner: ' + declare;
} else {
  status = 'Next player: ' + (nextMove ? 'X' : 'O');
}
    return (
        <>
        <div className='row'>
            <Square value={squares[0]} onSquareClick={()=>handleClick(0)}/>
            <Square value={squares[1]} onSquareClick={()=>handleClick(1)}/>
            <Square value={squares[2]} onSquareClick={()=>handleClick(2)}/>
        </div>
        <div className='row'>
            <Square value={squares[3]} onSquareClick={()=>handleClick(3)}/>
            <Square value={squares[4]} onSquareClick={()=>handleClick(4)}/>
            <Square value={squares[5]} onSquareClick={()=>handleClick(5)}/>
        </div>
        <div className='row'>
            <Square value={squares[6]} onSquareClick={()=>handleClick(6)}/>
            <Square value={squares[7]} onSquareClick={()=>handleClick(7)}/>
            <Square value={squares[8]} onSquareClick={()=>handleClick(8)}/>
        </div>
        <p>{status}</p>
        </>
    );
}

export default Tictac;