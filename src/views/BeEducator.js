import React, { useContext } from 'react'
import { useMutation } from '@apollo/react-hooks'
import gql from 'graphql-tag'
import Localize from './../global/Localize'
import Session from './../global/Session'

import { Card, message } from 'antd'
import BeEducatorForm from './../components/BeEducator.form'
import { Redirect } from 'react-router-dom'

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

const BE_EDUCATOR = (
    gql`
        mutation($educator: EducatorCreateInput!){
            educatorCreate(educator: $educator){
                name
                username
                educatorId
                profilePicture{
                    uid
                    url
                    response
                    status
                }
                description
            }
        }
    `
)

const BeEducator = props => {

    const [educatorCreate, { loading }] = useMutation(BE_EDUCATOR)
    const { state } = useContext(Localize)
    const { state: session, dispatch: sessionDispatch } = useContext(Session)
    
    const onSubmit = async values => {
        try{

            const image = {
                url: values.image.url,
                uid: values.image.uid,
                response: values.image.response,
                status: values.image.status,
            }

            delete values.image.xhr

            values.image = image

            await educatorCreate({ variables: { educator: values } })

            sessionDispatch({ type: 'login', session: {...session, loginType: 'EDUCATOR'} })

            message.success({ content: state.translation.messages['Transaction successful'] })
        }catch(err){
            message.error({ content: err.message })
        }
    }
    
    return (
        <Card
            title={state.translation['Be educator']}
        >
            <BeEducatorForm onSubmit={onSubmit} loading={loading}/>
        </Card>
    )

}

export default BeEducator