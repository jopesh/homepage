const Plausible = ({ hostname }) => {
  if (typeof window !== 'undefined' && window.location.hostname === hostname) {
    return (
      <script
        async
        defer
        data-domain='johnschmidt.de'
        src='https://stats.johnschmidt.cloud/js/plausible.js'
      />
    )
  } else return null
}

export default Plausible
