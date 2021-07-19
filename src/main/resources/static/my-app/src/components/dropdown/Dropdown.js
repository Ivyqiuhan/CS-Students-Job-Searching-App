import React, { useState } from 'react'
import "./Dropdown.css";

//function Dropdown ({ title, items = [], multiSelect = false }) {
function Dropdown (props) {
    const [open, setOpen] = useState(false);
    const [selection, setSelection] = useState([]);
    const toggle = () => setOpen(!open);

    function handleOnClick(item) {
        if(!selection.some(current => current.id === item.id)) {
            if (!props.multiSelect) {
                setSelection([item]);
            } else if (props.multiSelect) {
                setSelection([...selection, item]);
            }
            props.changeValue(item);
        } else {
            let selectionAfterRemoval = selection;
            selectionAfterRemoval = selectionAfterRemoval.filter(
                current => current.id !== item.id
            );
            setSelection([...selectionAfterRemoval]);
            props.changeValue(selectionAfterRemoval);
        }
    }

    function isItemInSelection(item) {
        if (selection.find(current => current.id === item.id)) {
            return true;
        }
        return false;
    }

    return (
        <div className="dd-wrapper">
            <div className="dd-header" role="button" 
                 onKeyPress={() => toggle(!open)} onClick={() => toggle(!open)}> 

                <div className="dd-header__title">
                    <p className="dd-header__title--bold">
                        {props.title}
                    </p>
                </div>

                <div className="dd-header__action">
                    <p>
                        {open ? <div className="dd-icon"> 
                            <img src="https://img.icons8.com/material-outlined/24/000000/collapse-arrow.png"/>
                            </div>
                            : <div className="dd-icon">
                                <img src="https://img.icons8.com/material-outlined/50/000000/expand-arrow--v1.png"/>
                            </div>}
                                
                    </p>
                </div>
            </div>

            {open && (
                <ul className="dd-list">
                    {props.items.map(item => (
                        <li className="dd-list-item" key={item.id}>
                            <button class="button" onClick={() => handleOnClick(item)}>
                                <span>
                                    {item.value}
                                </span>
                                <span>
                                    {isItemInSelection(item) && <div className="dd-icon">
                                            <img src="https://img.icons8.com/material-outlined/24/000000/checkmark--v1.png"/>
                                        </div>}
                                </span>
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}



export default Dropdown;
