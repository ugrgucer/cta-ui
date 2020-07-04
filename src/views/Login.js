import React, { useContext } from 'react'
import { useMutation } from '@apollo/react-hooks'
import { Row, Col, message } from 'antd'
import LoginForm from './../components/Login.form'
import gql from 'graphql-tag'
import Localize from './../global/Localize'

import './../asset/login.css'

const layout = {
    login: {
        xs: 24,
        sm: 24,
        md: 16,
        lg: 12,
        xl: 8,
    },
    space: {
        xs: 0,
        sm: 0,
        md: 4,
        lg: 6,
        xl: 7,
    },
    logo: {
        xs: 7,
        sm: 6,
        md: 6,
        lg: 4,
        xl: 3,
        id: "logo"
    },
}

const LOGIN = (
    gql`
        mutation($login: Login!){
            login(login: $login){
                token
                date
                expiryDate
                loginType
            }
        }
    `
)

const Register = props => {
    const [login, { data, loading }] = useMutation(LOGIN);
    const { state } = useContext(Localize)

    const onLogin = async values => {
        console.log(values)
        try{
            values.loginType = 'REGULAR'
            await login({ variables: { login: values  }})

            message.success({ content: state.translation.messages['Login successful'] })
        }catch(err){
            message.error({ content: err.message })
        }
    }

    return (
        <Row style={{ height: "100%", width: "100%", position: "absolute" }} id="login-row">
            <Col {...layout.logo} style={{ position: "absolute"}}>
                <div className="logo" />
            </Col>
            <Col {...layout.space} />
            <Col {...layout.space} />
            <Col {...layout.login} style={{ height: "100%" }}>
                <Col span={24} className="login-col-before" style={{ height: "33%" }} />
                <Col span={24} className="login-col" style={{ height: "67%" }}>
                    <LoginForm onLogin={onLogin} loading={loading}/>
                </Col>
            </Col>
        </Row>
    )

}

export default Register