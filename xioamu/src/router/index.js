import {BrowserRouter} from 'react-router-dom'

import routes from './routerConfig'

import RouterView from './routerview'

import React from 'react'

function RootRouter(){
    return <BrowserRouter>
        <RouterView routes={routes}/>
    </BrowserRouter>
}

export default RootRouter;