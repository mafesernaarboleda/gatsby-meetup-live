import React from 'react'
import { graphql } from 'gatsby'

import Talk from '../components/talk'
import SEO from '../components/seo'
import Layout from '../components/layout'

const TalksPage = ({ data, location }) => {
  const { site, allInternalslides } = data
  const siteTitle = site.siteMetadata.title
  const { edges } = allInternalslides

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title='Talks' />
      <h1>Talks</h1>
      <div className='row'>
        {
          edges.map(({ node }, index) => <Talk imageUrl={node.imageUrl} key={index} url={node.url} />)
        }
      </div>
    </Layout>
  )
}

export default TalksPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allInternalslides {
      edges {
        node {
          name
          imageUrl
          url
        }
      }
    }
  }
`
