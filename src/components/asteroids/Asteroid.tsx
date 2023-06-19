import React, { FunctionComponent } from 'react'
import Button from '../shared/button/Button'
import { AsteroidType } from './AsteroidType'

const Asteroid: FunctionComponent<AsteroidType> = ({ asteroid }) => {
    return (
        <li key={asteroid.id}>
            <p>{asteroid.name}</p>
            {/* Button to manipulate the view of details, API didn't work and don't give me the list*/}
            <Button onClick={()=> {}}>View Details</Button>
        </li>
    )
}

export default Asteroid