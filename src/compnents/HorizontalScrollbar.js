import React, {useContext} from 'react';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';

export default function HorizontalScrollMenu(props) {
    return(
        <ScrollMenu>
            {props.data}
        </ScrollMenu>
    )
}