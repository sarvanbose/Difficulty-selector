import { useState } from 'react';
import s from './style.module.css';

export function MenuListItem(props) {
    const [isHovered, setHover] = useState(false);

    const activate = () => {
        setHover(true);
    }

    const deActiate = () => {
        setHover(false);
    }

    const getBgColor = () => {
        if (isHovered) {
            return '#fff';
        } else {
            if (props.isSelected) {
                return '#89CFF0';
            } else {
                return '#0000FF';
            }
            
        }
    }
    
    const onItemClick = () => {
        props.onClick(props.difficulty);
    }

    return (
        <div 
            onClick={onItemClick}
            onMouseEnter={activate} 
            onMouseLeave={deActiate}
            style={{ backgroundColor: getBgColor() }}         >
            set to : {props.difficulty}
        </div>
    )
}