import { WechatyBuilder } from 'wechaty'

const wechaty = WechatyBuilder.build() // get a Wechaty instance

const room_whitelist = [
  "Xinchejian Bot Test"
]

async function onMessage(msg) {
  console.log('StarterBot', msg.toString())
  
  const room = await msg.room()
  if(!room) return

  const topic = await room.topic()
  console.log('msg room topic', topic)

  if(!room_whitelist.includes(topic)) return
  
  if (msg.text() === 'ding') {
    await msg.say("Bot Message:\ndong")
  }


  // if(!room_whitelist.includes(msg.room().topic()))

  
}

wechaty
  .on('scan', (qrcode, status) => console.log(`Scan QR Code to login: ${status}\nhttps://wechaty.js.org/qrcode/${encodeURIComponent(qrcode)}`))
  .on('login',            user => console.log(`User ${user} logged in`))
  .on('message',       onMessage)
wechaty.start()
