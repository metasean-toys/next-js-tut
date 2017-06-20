// external libraries
import Markdown from 'react-markdown'

// internal components
import Layout from '../components/appLayout.js'

export default (props) => (
  <Layout>
    <h1>{props.url.query.title}</h1>
    <div className="markdown">
      Inside the div.markdown.
      <Markdown source={`
#### My blogpost's title

This is my blog post.

There are _many_ like it, but this **one** is mine.

'Cause markdown - can [link](/link).
      `} />
    </div>
    <style jsx global>{`
      .markdown {
        font-family: 'Arial';
      }

      .markdown a {
        text-decoration: none;
        color: blue;
      }

      .markdown a:hover {
        opacity: 0.6;
      }

      .markdown h3 {
        margin: 0;
        padding: 0;
        text-transform: uppercase;
      }
    `}</style>
  </Layout>
)
