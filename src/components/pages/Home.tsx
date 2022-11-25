import React from 'react'
import URL from '../../utils/constant/URL'
import Ck from './Ck'

export default function Home() {
    return (
        <div className=''>
            <ul>
                <li><a href={URL.CK}>ck editor</a></li>
                <li><a href={URL.QUIL}>Quil js</a></li>
            </ul>
        </div>
    )
}
