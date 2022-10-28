function Div5(props){
    const  numbers = props.numbers;
    const listItems = numbers.map((val)=>
    <li>{val}</li> 
    );

    return(
        <>
        <ul>{listItems}</ul>
        </>
    )


}
export default Div5;