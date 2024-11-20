import axios from 'axios'
import crypto from 'crypto'

const encode = secret => {
  const timestamp = Math.floor(Date.now() / 1000)
  const str = Buffer.from(`${timestamp}\n${secret}`, 'utf8')
  const sign = crypto.createHmac('SHA256', str)
  sign.update(Buffer.alloc(0))
  return { timestamp, sign: sign.digest('base64') }
}

const defaultHooksConfig = {
  webhookUrl: 'https://open.feishu.cn/',
  secret: '',
}

const configs = {
  development: {
    ...defaultHooksConfig,
    name: '开发',
    urls: ['http://'],
    content: {
      tag: 'text',
      text: '@前端、后端',
    },
  },
  test: {
    ...defaultHooksConfig,
    name: '测试',
    urls: ['http://'],
    content: {
      tag: 'text',
      text: '@产品、测试',
    },
  },
  production: {
    ...defaultHooksConfig,
    name: '正式',
    urls: ['https://'],
    content: {
      tag: 'text',
      text: '@所有人',
    },
    // content: {
    //   tag: 'at',
    //   user_id: 'all',
    //   user_name: '所有人',
    // },
  },
}

// https://open.feishu.cn/document/client-docs/bot-v3/add-custom-bot
// https://open.feishu.cn/document/faq/trouble-shooting/how-to-obtain-user-id
export const send = async (mode = 'test') => {
  const config = configs[mode]
  const { name, urls = [], content, webhookUrl, secret } = config
  const { timestamp, sign } = encode(secret)

  const params = {
    timestamp: timestamp.toString(),
    sign,
    msg_type: 'post',
    content: {
      post: {
        zh_cn: {
          title: `**${name}环境**发布`,
          content: [
            ...urls.map((url, index) => {
              return [
                {
                  tag: 'text',
                  text: `${name}地址${urls.length > 1 ? index + 1 : ''}: `,
                },
                {
                  tag: 'a',
                  text: url,
                  href: url,
                },
              ]
            }),
            content && [{ tag: 'text', text: '-------------' }],
            content && [content],
          ],
        },
      },
    },
  }
  const { data: result } = await axios.post(webhookUrl, params)
  return console.log(result)
}
