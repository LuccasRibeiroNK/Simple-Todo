import React, { useState } from 'react';
import './App.css';

function App() {
    const [newItem, setNewItem] = useState('');
    const [addItem, setAddItem] = useState([]);

    const handleChange = (e) => {
        setNewItem(e.target.value);
    }
    return (
        <div className="App">
            <div className="container">
                <h1>Lista de afazeres</h1>
                <input type="text"
                    placeholder='Adicione um novo afazer'
                    value={newItem}
                    onChange={handleChange}
                />
                <button className='btn btn-success'
                    onClick={() => {
                        setAddItem([...addItem, newItem]);
                        setNewItem('');
                    }}
                >Adicionar novo item</button>

                <ul>
                    <li>
                        {addItem.map((item, index) => {
                            return <li
                                className='list-group-item'
                                key={index}>{item}
                                <button className='btn-danger'
                                    onClick={() => {
                                        const removeItem = [...addItem];
                                        removeItem.splice(index, 1);
                                        setAddItem(removeItem);
                                    }}
                                >❌</button>
                            </li>
                        })}

                    </li>
                </ul>
            </div>
        </div>
    )

}

export default App;
