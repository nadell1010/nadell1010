const axios = require('axios')

module.exports.chatAI = async (text) => {
  const res = await axios.post(
    'https://api.openai.com/v1/chat/completions',
    {
      model: 'gpt-3.5-turbo',
      messages: [{ role: 'user', content: text }]
    },
    {
      headers: {
        Authorization: `Bearer ${process.env.AI_KEY}`
      }
    }
  )

  return res.data.choices[0].message.content
}
