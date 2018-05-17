export const tickFuctory = (g) => (...args) => {
  let f, res = () => f.next(),
      sleep = (ms) => setTimeout(res, ms)
  f = g.apply({sleep}, args); f.next()
}

/* const tick = tickFuctory(function*() {
  let { sleep } = this
  console.log("Sleeping")
  yield sleep(1000)
  console.log('poop')
  tick()
}) */
