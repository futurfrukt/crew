import {ListItem} from "./ListItem";
import {useCallback} from "react";
import {nanoid} from "nanoid";

export const List = ({list, onChange, onRemove}) => {
    const handleAdd = useCallback(() => {
        const item = {
            id: nanoid(),
            name: '',
            sex: 0,
        }
        onChange([...list, item]);
    }, [list]);

    return <div className='list'>
        {list.map((item, index) => <ListItem
            key={item.id}
            item={item}
            isFocused={index === list.length - 1 && !item.name}
            onChange={onChange}
            onRemove={onRemove}
        />)}
        <button onClick={handleAdd}>+</button>
    </div>;
}