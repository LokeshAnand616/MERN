import '../assets/square.css';
function Square({value,onSquareClick}) {

    return (
        <>
            <div class='square' onClick={onSquareClick}>{value}</div>
        </>
    );
}

export default Square;