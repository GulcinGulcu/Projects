import './styles.css';

export const Main = ({children, className}) => {
    return (
        <main className={className}>
         {children}
        </main>
    )
}