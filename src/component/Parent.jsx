import Div4 from './Div4.jsx'
import Div1 from './Div1.jsx'
import  './Parent.css'
import Div5 from './Div5.jsx';
import Div6 from './Div6.jsx';
import Div3 from './Div3.jsx';
import Div2 from './Div2.jsx';

function Parent(){
    const comment = {
       
        text: 'I hope you enjoy learning React!',
        author: {
          name: 'Hello Kitty'
        }
    };
    const img = {
        avatarUrl: 'http://placekitten.com/g/64/64'
    }
    const dataArray = [
        {bowler:'shaheen', age:20},
        {bowler:'haris', age:27},
        {bowler:'shadab', age:25}
      
    ]
    let value= false
    const number = [1,2,3,4,5];



  return(
    <>  
    <div className='main'>
    <div className='div1 all' >
       <Div1 comment={comment}/>
    </div>
   <div className='div1 all' >
        <Div2/>
   </div>
    <div className='div1 all' >
    <Div3 img= {img.avatarUrl} />
    </div>
    <div className='div1 all' >
    <Div4 data={dataArray}/>
    </div>
    <div className='div1 all' >
        <Div5 numbers={number}/>
    </div>
    <div className='div1 all' >
        {value ? <Div4 data={dataArray}/> :<Div6/>}
    </div>
    </div>
    </>
  )
}
export default Parent;