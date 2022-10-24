import './styles.scss'

export function Card (props?: any) {
    return (
            <div className="card__main">
                <img height="220" width="170" src="https://static-cdn.jtvnw.net/ttv-boxart/515025_IGDB-285x380.jpg" className="card__image"/>
                <div className="card__info">
                    <span className='card__game'>Overwatch 2</span>
                    <span className='card__anuncio'>3 anuncios</span>
                </div>
            </div>
    )
}

export default Card;