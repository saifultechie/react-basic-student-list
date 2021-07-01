import React from 'react'

function MemoFunction({name}) {
    console.log('memo component')
    return (
        <div>
            <h1>this is memo class {name}</h1>
        </div>
    )
}

export default React.memo(MemoFunction) 
