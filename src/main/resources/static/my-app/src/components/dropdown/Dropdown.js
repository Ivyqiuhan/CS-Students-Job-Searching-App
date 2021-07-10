import React, { useState } from 'react'
import "./Dropdown.css";

function Dropdown ({ title, items = [], multiSelect = false }) {
    const [open, setOpen] = useState(false);
    const [selection, setSelection] = useState([]);
    const toggle = () => setOpen(!open);

    function handleOnClick(item) {

    }

    return (
        <div className="dd-wrapper">
            <div className="dd-header" role="button" 
                 onKeyPress={() => toggle(!open)} onClick={() => toggle(!open)}> 

                <div className="dd-header__title">
                    <p className="dd-header__title--bold">
                        {title}
                    </p>
                </div>

                <div className="dd-header__action">
                    <p>
                        {open ? 'Close' : 'Open'}
                    </p>
                </div>
            </div>

            {open && (
                <ul className="dd-list">
                    {items.map(item => (
                        <li className="dd-list-item" key={item.id}>
                            <button class="button" onClick={() => handleOnClick(item)}>
                                <span>
                                    {item.value}
                                </span>
                                <span>
                                    Selected...
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
