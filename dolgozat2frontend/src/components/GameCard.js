
import './GameCard.css';

export default function GameCard(props){

    return(
        <div>
            {
                props.test.map((element, key) => {
                    return(
                        <div className="kerdesKartya" key={key}>
                            <div className='kerdes'>{element.kerdes}</div>
                            <div className='valaszok'>
                                <button className="valasz">{element.v1}</button>
                                <button className="valasz">{element.v2}</button>
                                <button className="valasz">{element.v3}</button>
                                <button className="valasz">{element.v4}</button>
                            </div>
                            
                        </div>    
                    )
                })
            }
        </div>
    )
}
