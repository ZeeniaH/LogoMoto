import "../scss/theme.scss"

import React from "react"
import PreLoader from "../components/preLoader"

// This default export is required in a new `pages/_app.js` file.
// export default function MyApp({ Component, pageProps }) {
//   return <Component {...pageProps} />
// }

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = React.useState(true)
  React.useEffect(() => {
    setTimeout(() => setLoading(false), 2000)
  }, [])
  return (
    <>
      {loading ? (
        <PreLoader />
      ) : (
        <React.Fragment>
          <Component {...pageProps} />
        </React.Fragment>
      )}
    </>
  )
}
export default MyApp
