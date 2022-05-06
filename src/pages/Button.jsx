import classNames from "classnames";
import propTypes from "prop-types";
import React from "react";





const Button = ({onClick, className, outline, children}) => {
    return(

<button
onClick = {onClick}
className = {classNames('button', className, {
    'button--outline': outline,
    })}>
{children}
     </button>
     
    );

};

Button.propTypes = {
    onClick: propTypes.func,
    
}

 export default Button;

