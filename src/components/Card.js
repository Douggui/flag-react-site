
const Card = (props) => {

    const { country } = props

    const numberFormat = (x) => {

        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    }
    return (

        <li className="card">
            <img src={props.country.flags.svg} alt="drapeau" />
            <div className="data-container">
                <ul className="infos">
                    <li>{props.country.name.common}</li>
                    <li>{props.country.capital}</li>
                    <li >Pop {numberFormat(props.country.population)}</li>

                </ul>
            </div>
        </li>

    );

}
export default Card;