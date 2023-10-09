import { WechatyBuilder } from 'wechaty'

const wechaty = WechatyBuilder.build() // get a Wechaty instance

async function onMessage(msg) {
  console.log('StarterBot', msg.toString())
  console.log('msg room body', message.room())

  if (msg.text() === 'ding') {
    await msg.say('dong')
  }
}

wechaty
  .on('scan', (qrcode, status) => console.log(`Scan QR Code to login: ${status}\nhttps://wechaty.js.org/qrcode/${encodeURIComponent(qrcode)}`))
  .on('login',            user => console.log(`User ${user} logged in`))
  .on('message',       onMessage)
wechaty.start()
