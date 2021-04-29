import {useState} from 'react';
import {nanoid} from "nanoid";
import {List} from './List';
import './App.css';

const itemEmpty = {
    id: nanoid(),
    name: '',
    sex: 0,
};

function App() {
    // TODO read from local storage
    const [list, setList] = useState([itemEmpty]);

    const handleChange = (nextList) => {
        setList(nextList);
        // TODO save to local storage
    }

    return (
        <div className='app'>
            <header className='app__header'>Crew to cabins</header>
            <div className='app__content'>
                <List
                    list={list}
                    onChange={handleChange}
                    onRemove={(id) => setList(list.filter(item => item.id !== id))}
                />
            </div>
        </div>
    );
}

export default App;
