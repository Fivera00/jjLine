import Router from 'next/router'

const NotFound = (props) => {

    const newSearch = (e) => {
        e.preventDefault()
        const item_search = document.getElementById('search').value
        console.log("Soy parametro ",item_search)
        Router.push('/search/[sid]', `/search/${item_search}`)
    }

    return (
        <div className="not-found">
            <h2>Lo sentimos, no hemos encontrado ningún resultado.</h2>

            <p>Tu búsqueda de {props.searchTerm} no dio ningún resultado.</p>
            <p>Por favor, prueba a buscar otra vez utilizando estos conceptos:</p>
            <ul>
                <li>Comprueba que la ortografía es correcta.</li>
                <li>Limita la búsqueda a una o dos palabras.</li>
            </ul>
            <div className="new-search">
                <form onSubmit={(e) => newSearch(e)}>
                    <input id="search" placeholder="Buscar en nuestra tienda" 
                    aria-label="Buscar prenda"/>
                    <button type="submit">
                        <svg viewBox="0 0 24 24">
                            <path d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z" />
                        </svg>
                    </button>
                </form>
            </div>
        </div>
    )
}

export default NotFound