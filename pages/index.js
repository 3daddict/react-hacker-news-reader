
import 'isomorphic-fetch' /* So fetch works in the server and the browser */

export default class extends React.Component {

    static async getInitialProps() { /* Get the Latest Stories */ }
 
    render() {
      return <div>
        <h1>Latest News</h1>
    
        { this.props.stories.map((story) => (
          <h2><a href={ story.url }>{ story.title }</a></h2>
        )) }
    
        <style jsx>{` h2 { font-family: system-ui; } `}</style>
        <style global jsx>{` /* Your Global CSS */ `}</style>
      </div>
    }
   }