export const Range = ({setFunc}:any)=>{
    return(
        <div>
            <input type='range' onChange={(e)=>{
                setFunc(e.target.value)
            }} min={1}/>
        </div>
    );
}