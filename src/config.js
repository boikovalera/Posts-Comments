import * as Yup from 'yup';

export default {
    postUrl : 'https://jsonplaceholder.typicode.com/posts',
    commentUrl : 'https://jsonplaceholder.typicode.com/comments',

    getEmptyPost: {        
        id : 0,
        userId: 0,
        title : "",
        body : ""
    },

    getEmptyMessage: {
        name: "",
        email: "",
        message: ""
    },

    getValidationSchema: {
        name: Yup.string().required('Name is required'),                    
        email: Yup.string().email('Email is invalid').required('Email is required'),
        message: Yup.string().min(6, 'Message must be at least 6 characters').required('Message is required'),                            
    }

}