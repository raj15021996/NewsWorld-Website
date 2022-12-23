import React from 'react'
import loading from './utils/loading.gif'

export default function Loader() {
    return (
        <div className="text-center">
            <img src={loading} alt="loader" />
        </div>
    )
}
