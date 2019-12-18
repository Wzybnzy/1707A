import {BrowserRouter} from 'react-router-dom'
import React from 'react'
import routes from './routerConfig'
import RouterView from './routerview'
function RootRuter(){
    return <BrowserRouter>
            <RouterView routes={routes}/>
    </BrowserRouter>
}


export default RootRuter;