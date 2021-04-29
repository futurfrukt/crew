import {useCallback, useEffect, useRef, useState} from "react";

export const ListItem = ({ isFocused, item, onRemove }) => {
    const [name, setName] = useState('');
    const [sex, setSex] = useState(0);

    const el = useRef(null);

    useEffect(() => {
        console.log(isFocused, el.current);
        if (isFocused && el.current) {
            el.current.focus();
        }
    }, [isFocused, el.current]);

    const handleChange = useCallback((e) => {
        setName(e.target.value);
        // onChange({ name, sex });
    }, [name, sex, setName]);

    return <div className='list__item'>
        <input
            ref={el}
            name='name'
            placeholder='имя'
            type='text'
            autoComplete='off'
            value={name}
            onChange={handleChange}
        />
        <button className={sex === 1 ? 'active' : ''} onClick={() => setSex(1)}>М</button>
        <button className={sex === 2 ? 'active' : ''} onClick={() => setSex(2)}>Ж</button>
        <button onClick={() => onRemove(item.id)}>✕</button>
    </div>;
}