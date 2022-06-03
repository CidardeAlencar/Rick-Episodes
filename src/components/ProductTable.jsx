import React, { useState, useEffect } from 'react'
import { CategoryProductRow } from './CategoryProductRow'
import { CategoryProductRow2 } from './CategoryProductRow2'
// import { sportsList, electronicsList } from '../assets/filteredByCategories'
import '../styles/ProductTable.css'


function ProductTable() {
    const [dataCharacters, setDataCharacters] = useState([])
    const fetchCharacters = async () => {
        const response = await fetch('https://rickandmortyapi.com/api/character')
        response.json().then(response => setDataCharacters(response.results))
    }
    useEffect(() => {
        fetchCharacters()
    }, [])
    ////
    const [dataEpisodes, setDataEpisodes] = useState([])
    const fetchEpisodes = async () => {
        const response = await fetch('https://rickandmortyapi.com/api/episode')
        response.json().then(response => setDataEpisodes(response.results))
    }
    useEffect(() => {
        fetchEpisodes()
    }, [])
    // console.log(dataCharacters)

    return (
        <div className='product-table'>
            <div className='product-table__header'>
                <span>'Rick & Morty'</span>

            </div>
            <div className='product-table__categories'>
                <CategoryProductRow title='Characters' list={dataCharacters} />
                <CategoryProductRow2 title='Episode' list={dataEpisodes} />
            </div>
        </div>
    )
}

export { ProductTable }