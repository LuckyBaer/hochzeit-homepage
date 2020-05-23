import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'

const LeftSidebar = props => (
  <Layout>
    <Helmet>
      <title>Right Sidebar - Landed by HTML5 UP</title>
      <meta name="description" content="Right Sidebar Page" />
    </Helmet>

    <div id="main" className="wrapper style1">
      <div className="container">
        <header className="major">
          <h2>Hochzeit Galerie</h2>
          <p>
            Hier entsteht eine Galerie mit allen Bildern der Hochzeit. Bitte habt etwas Geduld bis diese erstellt sind.
          </p>
        </header>
      </div>
    </div>
  </Layout>
)

export default LeftSidebar
