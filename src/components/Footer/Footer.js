import React, {
    Component
} from 'react';

import Logo from '../../elements/Logo/Logo';

const footer = () => {
    return ( <
        footer className = {
            classes.Footer
        } >
        <
        Logo colorScheme = 'dark'
        clicked = {
            props.onClickHandler
        }
        /> <
        div className = {
            classes.Separator
        } > < /div> < /
        footer >
    )
}

export default Footer