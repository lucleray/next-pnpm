const { format } = require('date-fns')

function Page({ dateStr }) {
  return <p>{dateStr}</p>
}

export async function getServerSideProps() {
  const dateStr = format(new Date(), 'yyyy-MM-dd HH:mm:ss')
  return { props: { dateStr } }
}

export default Page