import React, { useRef, useState } from 'react';
import './Form.css';

function Form() {
    const [input, setInput] = useState('');
    const [konto, setKonto] = useState(0);
    const inputRef = useRef();

    const increment = () => {
        if (inputRef.current.value.trim() !== '') {
            setKonto(Number(konto) + Number(input));
            setInput('');
        } else return;
    };

    const decrement = () => {
        if (inputRef.current.value.trim() !== '' && konto >= +input) {
            setKonto(Number(konto) - Number(input));
            setInput('');
        } else if (inputRef.current.value.trim() === '') {
            alert('Please enter an amount');
        } else {
            alert('There is not enough money in your account');
            setInput('');
        }
    };
    return (
        <div>
            <div className="header"></div>
            <div className="konto">
                <h1 id="title">Banana Bank</h1>

                <h2> Dein Girokonto</h2>
                <p className="saldo">{konto}€</p>
            </div>

            <div>
                <input
                    type="text"
                    ref={inputRef}
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />
                <div>
                    <button className="einzahlen" onClick={increment}>
                        Einzahlung
                    </button>
                    <button className="auszahlen" onClick={decrement}>
                        Auszahlung
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Form;
