export const Range = ({setFunc}:any)=>{
    return(
            <input type='range' onChange={(e)=>{
                setFunc(e.target.value)
            }} min={50} max={200}/>
    );
}