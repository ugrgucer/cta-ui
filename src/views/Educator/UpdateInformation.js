import React, { useContext } from 'react'
import { useMutation } from '@apollo/react-hooks'
import gql from 'graphql-tag'
import Localize from './../../global/Localize'
import Session from './../../global/Session'
import { deleteUnchangedValue } from './../../utils/form'

import { Card, message } from 'antd'
import BeEducatorForm from '../../components/BeEducator.form'

const INFORMATION_UPDATE = (
    gql`
        mutation($educator: EducatorUpdateInput , $id: Int!){
            educatorUpdate(educator: $educator, id:$id) {
                id
                name
                username
                description
                profilePicture {
                    url
                    uid
                    response
                    status
                }
            }
        }
    `
)

const UpdateInformation = props => {
    const [educatorUpdate, { loading }] = useMutation(INFORMATION_UPDATE)
    const { state } = useContext(Localize)
    const { state: session, dispatch: sessionDispatch } = useContext(Session)
    
    
    const onSubmit = async values => {
        try{
            const profilePicture = {
                url: values.profilePicture.url,
                uid: values.profilePicture.uid,
                response: values.profilePicture.response,
                status: values.profilePicture.status
            }
            
            delete values.profilePicture.xhr
            values.profilePicture = profilePicture
            values = await deleteUnchangedValue(props.educator, values)
            const result = await educatorUpdate({ variables: { educator: values, id: parseInt(props.educator.id) }})
            sessionDispatch({ type: 'login', educator: result.data.educatorUpdate, session })
            message.success({ content: state.translation.messages['Transaction successful'] })
        }catch(err){
            message.error({ content: err.message })
        }
    }
    
    return (
        <Card
            title={state.translation['Update My Informations']}
        >
            <BeEducatorForm onSubmit={onSubmit} loading={loading} initialValues={props.educator}/>
        </Card>
    )

}

export default UpdateInformation