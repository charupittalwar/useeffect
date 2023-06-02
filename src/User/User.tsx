import { useEffect, useState } from "react";

const User:React.FC<any> = (props) => {

   const [name , setName] =useState<string> ('php ');

   const [pass , setPass] = useState<number> (0)

const [isError , setIserror] = useState <any> ({status :false , msg :""})

const chkerror = ( msg = 'default msg is ') => {

alert(isError.msg);

}

useEffect (() =>{

if (!isError.status && name =="php"){

    chkerror();
}
else if (isError.status){

chkerror(isError.msg)

}


}, [isError]);

const login = () =>{


    if (name ==="php"){
setIserror({status :true ,msg :"name can not be php"})

return;
    }

    console.log (name , pass)

}

 return (
<div>


<h1>user component</h1>
{props.children}

<input type = "text" value ={name} onChange={e =>setName(e.target.value)} ></input> <br></br><br></br>

<input type = "number" value={pass} onChange={e =>setPass (parseInt(e.target.value))} ></input><br></br><br></br>

<button onClick={login}>Login</button>

</div>



 )


}

export default User;