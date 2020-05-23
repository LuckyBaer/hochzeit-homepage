import React from 'react'
import {Helmet} from 'react-helmet'
import Layout from '../components/layout'
import Banner from '../components/Banner'
import One from '../components/One'
import Two from '../components/Two'
import Three from '../components/Three'
import Four from '../components/Four'
import Five from '../components/Five'
import Wunsch from "../components/Wunsch";

class Home extends React.Component {
    render() {
        return (
            <Layout location="/">
                <Helmet
                    htmlAttributes={{lang: 'en'}}
                    title="Gatsby Starter - Landed"
                    meta={[
                        {name: 'description', content: 'Landed Gatsby Starter'},
                        {name: 'keywords', content: 'sample, something'},
                    ]}
                ></Helmet>
                <Banner/>
                <One/>
                <Two/>
                <Three/>
                <Wunsch/>
                <Four/>
                <Five/>
            </Layout>
        )
    }
}

export default Home
