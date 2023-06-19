import { useState } from 'react'
import './LoginPage.css'
import Input from '../../Input'

const LoginPage = () => {
    const [email,setEmail]= useState()
    const [password,setPassword]= useState()
    const [passwordError, setPasswordError] = useState()
    const [check,setCheck]=useState(false)
    const onChangeCheck= ()=>{
        setCheck(!check)
    }

    const onChangeEmail = (event)=>{
        // console.log(event)
        setEmail(event.target.value)
    }
    const onChangePassword= (event)=>{
        const passwordValue = event.target.value
 
        setPassword(passwordValue)
        if (passwordValue.length >= 6 ){
            setPasswordError()
        }else{
            setPasswordError("a senha deve ter mais de 6 digitos")
        }
        console.log(passwordError)
    }
const onSubmit = ()=>{
    console.log(email,password)
}
    return (
        <div className='container'>
            <div className='formContainer'>
                <Input
                label= "E-mail"
                name= "emailInput"
                value={email} 
                onChange={onChangeEmail}      
                />
                
                <Input
                    label="password"
                    type={check? "text":"Password"}
                    name="passwordInput"
                    value={password}
                    onChange={onChangePassword}
                    errorMessage={passwordError}/>

                

                <button onClick={onSubmit}>Login</button>
                <input type='checkbox' onChange={onChangeCheck} />
            </div>
            
        </div>
    );
}

export default LoginPage;