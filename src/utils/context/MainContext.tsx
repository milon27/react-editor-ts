import React, { createContext } from 'react'

interface iState {

}

export const StateContext = createContext<iState>({} as iState)

const MainContext = (props: React.PropsWithChildren<any>) => {


    const global_state: iState = {

    }

    return (
        <StateContext.Provider value={global_state}>
            {props.children}
        </StateContext.Provider>
    )
}

export default MainContext
