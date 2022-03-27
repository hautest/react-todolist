import React, { memo, useEffect, useState }  from 'react';
let A = JSON.parse( localStorage.getItem("todo"));
console.log(A)

function InputAndButtonBox () {
    const [inputValue, setinputValue] = useState('');
    const [todoArray, settodoArray] = useState([]);
    
            
    function FunsetinputValue (event) {
      event.preventDefault();
        setinputValue(event.target.value);
    }
    
    
    function buttonOnsubmit (event) {
        event.preventDefault();
       
        if (inputValue ==='') {
            alert('입력해주십시오');
        } else {
            console.log(inputValue);
            
           settodoArray((prev) => {
                const newArr =  [...prev, { text : inputValue,id: parseInt(Math.random()*100000+1)}];
                console.log(newArr);
                localStorage.setItem('todo',JSON.stringify(newArr));
                return newArr
                      })
           
           setinputValue('');
        }
    }



    function XButtonOnClick (event) {
        console.log(event.target.id);  
        settodoArray((prev) => {
            const newArr = prev.filter( (array) => String (array.id) !== event.target.id
        )
        localStorage.setItem('todo',JSON.stringify(newArr) );
        return newArr
        
    } )
       

        console.log(todoArray);
         } 
    
    
    function Display() {
        if(window.location.reload && A!==null){settodoArray(A)}

       return(
        todoArray.map((array) => (
        <li key={array.id} id={array.id}> 
           <span> {array.text} </span>
          <button id={array.id} onClick={XButtonOnClick}>X</button>
        </li>
        )))}




    return (
        <>
        <form onSubmit={buttonOnsubmit}>
        <input value={inputValue} onChange={FunsetinputValue}></input>
        <button>입력</button>
        </form>
        <hr/>
        <ul>
        <Display ></Display>
      </ul>
        </>
    )
}

export default InputAndButtonBox


