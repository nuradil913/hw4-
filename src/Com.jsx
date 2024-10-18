import React, { useState } from 'react';

const Calculator = () => {
    const [num1, setNum1] = useState('');
    const [num2, setNum2] = useState('');
    const [result, setResult] = useState(null);

    // Функция для проверки ограничений
    const checkLimit = (value) => {
        if (value > 15) return 15;  // Ограничение сверху
        if (value < 0) return 0;    // Ограничение снизу
        return value;               // Возвращаем значение, если оно в пределах
    };

    const Plus = () => {
        const val1 = Number(num1);
        const val2 = Number(num2);
        const res = val1 + val2;
        const checkedResult = checkLimit(res);
        setResult(checkedResult);
        setNum1(checkedResult);
        setNum2('');
    }

    const Min = () => {
        const val1 = Number(num1);
        const val2 = Number(num2);
        const res = val1 - val2;
        const checkedResult = checkLimit(res);
        setResult(checkedResult);
        setNum1(checkedResult);
        setNum2('');
    }

    const Umn = () => {
        const val1 = Number(num1);
        const val2 = Number(num2);
        const res = val1 * val2;
        const checkedResult = checkLimit(res);
        setResult(checkedResult);
        setNum1(checkedResult);
        setNum2('');
    }

    const Del = () => {
        const val1 = Number(num1);
        const val2 = Number(num2);
        const res = val1 / val2;
        const checkedResult = checkLimit(res);
        setResult(checkedResult);
        setNum1(checkedResult);
        setNum2('');
    }
    
    return (
        <div className='Calculator'>
            <input type="number" value={num1} onChange={(e) => setNum1(e.target.value)} />
            <input type="number" value={num2} onChange={(e) => setNum2(e.target.value)} />
            <h1>{result !== null ? result : ''}</h1>
            <button onClick={Plus}>+</button>
            <button onClick={Min}>-</button>
            <button onClick={Umn}>*</button>
            <button onClick={Del}>/</button>
        </div>
    );
}

export default Calculator;