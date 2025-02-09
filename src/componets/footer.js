// function

export function Footer(){
    const year = new Date().getFullYear();
    return(
        <footer>
            <p>copyright {year}</p>
        </footer>
    );
}