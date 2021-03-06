import React, { useContext } from 'react'
import { useMutation } from '@apollo/react-hooks'
import gql from 'graphql-tag'
import Localize from './../../global/Localize'
import { compile } from 'path-to-regexp'

import { Card, message } from 'antd'
import CourseForm from './../../components/Course.form'

const COURSE_CREATE = (
    gql`
        mutation ($course: CourseCreateInput!) {
            courseCreate(course: $course) {
                title
                description
                seoLink
                image{
                    imageId
                    response
                    status
                    uid
                    url
                }
                educatorId
            }
        }
    `
)

const CreateCourse = props => {

    const [courseCreate, { loading }] = useMutation(COURSE_CREATE)
    const { state } = useContext(Localize)

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

            await courseCreate({ variables: { course: values } })

            message.success({ content: state.translation.messages['Transaction successful'] })

            props.history.push(compile('/educator/panel/course/:seoLink')({ seoLink: values.seoLink }))
        }catch(err){
            message.error({ content: err.message })
        }
    }
    
    return (
        <Card
            title={state.translation['Create a course']}
        >
            <CourseForm onSubmit={onSubmit} loading={loading}/>
        </Card>
    )

}

export default CreateCourse