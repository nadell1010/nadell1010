const fs = require('fs')
const path = require('path')

module.exports = async (sock, m, msg, config) => {
  const body = msg.text || ''
  if (!body.startsWith(config.prefix)) return

  const args = body.slice(config.prefix.length).trim().split(/ +/)
  const cmd = args.shift().toLowerCase()

  const commandFiles = fs.readdirSync('./command').filter(f => f.endsWith('.js'))

  for (const file of commandFiles) {
    const command = require(`../command/${file}`)
    if (command.name === cmd) {
      return command.execute({ sock, m, msg, args, config })
    }
  }
        }
