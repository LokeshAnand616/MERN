//27th january
import React,{ useEffect} from "react";
import ReactDOM from 'react-dom'

function Modal({value,fn}){
    const newElement = document.createElement('div');
    useEffect(()=>{
        newElement.id='root-div';
        document.body.appendChild(newElement);
        return()=>{
            document.body.removeChild(newElement);
        }
    },[newElement]);

    return ReactDOM.createPortal(
        <>
        <div className="modal" style={{ border: '2px solid black', width: '200px', height: '200px' }}>{value}</div>
        <span onClick={()=>{fn(false)}}>x</span>
        </>,
        newElement
    );
}

export default Modal;
