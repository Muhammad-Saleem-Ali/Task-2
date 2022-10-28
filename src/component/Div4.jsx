

function Div4(props){

    console.log(props);
    let arr = props.data;

    return(
        <>
        {arr.map((val, index) =>(
            <p>
                {index} || bowler name {val.bowler} || age  {val.age}
            </p>
        ))}

       
        </>
    )
}
export default Div4;