const { format } = require('date-fns')
const SafeEventEmitter = require('@metamask/safe-event-emitter')
const SafeEventEmitter2 = require('safe-event-emitter')

function Page({ dateStr }) {
  return <p>{dateStr}</p>
}

export async function getServerSideProps() {
  const dateStr = format(new Date(), 'yyyy-MM-dd HH:mm:ss')

  const ee = new SafeEventEmitter();
  ee.on('boom', () => { console.log('boom'); });
  ee.emit('boom');

  const ee2 = new SafeEventEmitter2();
  ee2.on('boom', () => { console.log('boom'); });
  ee2.emit('boom');

  return { props: { dateStr } }
}

export default Page