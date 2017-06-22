// external libraries
import React from 'react'
import Link from 'next/link'
import fetch from 'isomorphic-unfetch'

// internal components
import Layout from '../components/appLayout.js'

const PostLink = (props) => (
  <li>
    <Link as={`/post/${props.id}`} href={`/posts?title=${props.title}`}>
      <a>{props.title}</a>
    </Link>
  </li>
)

const Index = (props) => (
  <Layout>
    <h1>Batman TV Shows</h1>
    <ul>
      {props.shows.map(({show}) => (
        <li key={show.id}>
          <Link as={`/post/${show.id}`} href={`/post?id=${show.id}`}>
            <a>{show.name}</a>
          </Link>
        </li>
      ))}
    </ul>
  </Layout>
)

Index.getInitialProps = async function() {
  const urlPath = 'https://api.tvmaze.com/search/shows?q=batman'
  const res = await fetch(urlPath)
  const data = await res.json()

  console.log(`Show data fetched. Count: ${data.length}`)

  return {
    shows: data
  }
}

export default Index
