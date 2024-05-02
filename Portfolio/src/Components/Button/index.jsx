export const Button = ({children, className, handleOnClick}) => {
    return (
        <button className={className} onClick={handleOnClick}>
         {children}
        </button>
    )
};