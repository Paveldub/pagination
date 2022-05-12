import { React } from 'react';

export const Countries = ({ countries, loading }) => {
    console.log(countries?.map((item => item)))
   
    if (loading) {
        return <h1>Loading...</h1>
    }


    return (
        <div className="col">
            {countries?.map((item) => {
                return (
                    <li>
                        {item?.name.common}
                        <img src={item.flags.svg} style={{width: 25}}/>
                    </li>
                )
            })}
        </div>
      );
}
