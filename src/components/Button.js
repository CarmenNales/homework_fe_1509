function Button({children, disabled}) {

    // Return Button component
    return(

        <button disabled={disabled}>
            {children}
        </button>

    );

}

export default Button;