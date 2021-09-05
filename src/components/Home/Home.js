import React, {useEffect} from 'react';
import {withRouter} from 'react-router-dom';
import {ACCESS_TOKEN_NAME, API_BASE_URL} from '../../constants/apiConstants';
import axios from 'axios'

function Home(props) {
    useEffect(() => {
        axios.get(API_BASE_URL + '/products', {
            headers: {
                'token': localStorage.getItem(ACCESS_TOKEN_NAME)
            },
            withCredentials: true
        })
            .then(function (response) {
                if (response.status === 200) {
                    console.log(response.data)
                }
                if (response.status !== 200) {
                    redirectToLogin()
                }
            })
            .catch(function (error) {
                redirectToLogin()
            });
    })

    function redirectToLogin() {
        props.history.push('/login');
    }

    return (
        <div className="mt-2">
            Home page content
        </div>
    )
}

export default withRouter(Home);