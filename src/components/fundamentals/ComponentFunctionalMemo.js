import React,  { Fragment } from 'react'

const ComponentFunctionalMemo = ({name}) => {
    console.log("Memo Component")
    return (
        <Fragment>
            <h2>Memo Component (Functional Component)</h2>
            <p>{name}</p>
        </Fragment>
    )
}

export default React.memo(ComponentFunctionalMemo);