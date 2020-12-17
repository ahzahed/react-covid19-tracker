import React, { useEffect, useState } from 'react'
import {NativeSelect, FormControl} from '@material-ui/core'
import {fetchCountries} from '../../api'

import styles from './CountryPicker.module.css'

const CountryPicker = ({handleCountryChange}) => {
    const [fetchedCountires, setFetchedCountries] = useState([])
    useEffect(() => {
        const fetchAPI = async ()=>{
            setFetchedCountries(await fetchCountries())
        }
        fetchAPI()
    }, [])
    return (
        <FormControl className={styles.formControl}>
            <NativeSelect defaultValue="" onChange={(e)=>handleCountryChange(e.target.value)}>
                <option value="">Global</option>
                {fetchedCountires.map((country,index)=><option key={index} value={country}>{country}</option>)}
            </NativeSelect>
        </FormControl>
    )
}

export default CountryPicker
