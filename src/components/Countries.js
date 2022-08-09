import { useState, useEffect } from "react";
import axios from "axios";
import Card from "./Card";


const Countries = () => {

    const [data, setData] = useState([]);
    const [sortedData, setSortedData] = useState([]);
    const [playOnce, setPlayOnce] = useState(true);
    const [rangeValue, setRangeValue] = useState(40);
    const [selectRadio, setSelectedRadio] = useState('');
    const radios = ['Africa', 'America', 'Asia', 'Europe', 'Oceania', 'Antarctic'];
    useEffect(() => {
        if (playOnce) {
            axios.get('https://restcountries.com/v3.1/all').then((res) => {
                setData(res.data);
                setPlayOnce(false);

            });

        }

        const sortedCountry = () => {
            const countryObj = Object.keys(data).map(i => data[i])

            const sortedArray = countryObj.sort((a, b) => {
                return b.population - a.population
            })

            sortedArray.length = rangeValue;
            setSortedData(sortedArray);
            console.log(sortedArray);
            sortedArray.map(country => {
                console.log(country.region);
            })

        };
        sortedCountry();
    }, [data, rangeValue, playOnce]);

    const item = () => {
        return data.map((country) => <li key={country.name.common}>{country.name}</li>);
    }
    return (
        <div className="countries">
            <div className="sort-container">
                <input type="range" min="1" max="250" value={rangeValue} onChange={(e) => setRangeValue(e.target.value)} />
                <ul className="radio-container">
                    {radios.map(radio => {
                        return (
                            <>
                                <li key={radio}>
                                    <input type="radio" id={radio} value={radio} checked={radio === selectRadio} onChange={(e) => setSelectedRadio(e.target.value)} />
                                    <label htmlFor={radio}>{radio}</label>

                                </li>

                            </>
                        );
                    })}
                </ul>
                <div className="cancel">
                    {selectRadio && <h5 onClick={() => setSelectedRadio('')}>Annuler le filtre</h5>}


                </div>
            </div>

            <ul className="countries-list ">
                {sortedData.filter(country => country.region.includes(selectRadio)).map(country => (
                    <Card country={country} key={country.name.common} />
                ))}

            </ul>
        </div>
    )
}
export default Countries;