import React from "react";

function Form () {
    function ClickAndEnter (event) {
        event.preventDefault() ;
        const input = document.querySelector('input');
        console.log(input.value);

        if ( input.value === '') {
            alert("입력해주십시오");
        } 

        else {
            const span = document.createAttribute('span');
            const ul = document.createAttribute('ul');
            const li = document.createAttribute('li');
           

            input.value = '';

        }


    }
    return (
      
        <>
        <form id="form">
        <input></input>
        <button onClick={ClickAndEnter}>click</button>
        </form>
        </>
    )
}
 


function Header () {
    return (
        <>
        <Form></Form>
        </>
    )
}

export default Header ;