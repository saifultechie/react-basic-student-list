import React,{useState,useMemo} from 'react'

const UseMemoHook = () => {
    const [idOne,setOne] = useState(0)
    const [idTwo,setTwo] = useState(0)

    const incrementIdOne = ()=>{
        setOne(idOne+1)
    }

    const incrementTwo = ()=>{
        setTwo(idTwo+1)
    }

    const isEven =useMemo(() => {
        let n =0
        while(n<200000000) n++;
        return idOne%2 === 0
    },[idOne])
    return (
        <div>
            <div>
                <button onClick={()=>incrementIdOne()}>incremt id one- {idOne}</button>
                {isEven ? "even":"odd"}
            </div>
            <div>
                <button onClick={()=>incrementTwo()}>incremt id two- {idTwo}</button>
            </div>
        </div>
    )
}

export default UseMemoHook
