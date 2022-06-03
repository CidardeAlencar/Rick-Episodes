import React from 'react'
import { ProductRow } from './ProductRow'
//import { ProductRow2 } from './ProductRow2'
import '../styles/CategoryProductRow.css'

function CategoryProductRow(props) {

    const title = props.title
    const list = props.list
    return (
        <div className='category-container'>
            <div className='category-title'>
                {title}
            </div>
            <div className='category-body'>
                {list.map((character) =>
                    <ProductRow
                        name={character.name}
                        status={character.status}
                        key={character.name}
                        image={character.image}
                    />)}
                {/* {list.map((Episode) =>
                    <ProductRow2
                        name={Episode.name}
                        air_date={Episode.air_date}
                        key={Episode.name}
                        episode={Episode.episode}
                    />)} */}
            </div>
        </div>
    )
}

export { CategoryProductRow }