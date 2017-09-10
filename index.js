const { Eventline } = require('eventline')

let eventline = new Eventline()

eventline.on({
  text: /ping/g
}).then((event) => {
  console.log('pong')
  return event
})

eventline.on({
  text: /(hi)|(hello).*/g
}).then((event) => {
  console.log('Hi')
  return event
})

eventline.on({
  text: /.*/
}).then((event) => {
  console.log('What?')
  return event
})

eventline.start()

const repl = require('repl');

const handleRepl = (cmd, context, filename, callback) => {
  eventline.route({ text: cmd })
  callback()
}

repl.start({ prompt: '> ', eval: handleRepl });
