const {
  makeWASocket,
  useMultiFileAuthState
} = require('@whiskeysockets/baileys')

const config = require('../config')
const handler = require('./handler')

async function start() {
  const { state, saveCreds } = await useMultiFileAuthState('session')

  const sock = makeWASocket({ auth: state })

  sock.ev.on('messages.upsert', async ({ messages }) => {
    const m = messages[0]
    if (!m.message) return

    const msg = {
      text: m.message.conversation ||
            m.message.extendedTextMessage?.text ||
            ''
    }

    await handler(sock, m, msg, config)
  })

  sock.ev.on('creds.update', saveCreds)
}

start()
