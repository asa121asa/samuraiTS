import React from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";





type FormDataType={
    login: string
    password: string
    rememberMe: boolean

}


const LoginForm: React.FC<InjectedFormProps<FormDataType>> =(props)=> {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={'Login'} name={'login'} component={'input'}/>
            </div>
            <div>
                <Field placeholder={'password'} name={'password'} component={'input'}/>
            </div>
            <div>
                <Field type={"checkbox"} name={'rememberMe'} component={'input'}/>
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    )

}

const LoginReduxForm = reduxForm<FormDataType>({form: 'login'})(LoginForm)


function Login() {
    const onSubmit = (formData: FormDataType) => {
        console.log(formData)
    }
    return <div>

        <div>Login</div>
        <LoginReduxForm onSubmit={onSubmit}/>

    </div>

}

export default Login