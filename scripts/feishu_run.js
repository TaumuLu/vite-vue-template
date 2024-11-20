import minimist from 'minimist'

import { send } from './feishu.js'

const argv = minimist(process.argv.slice(2))

send(argv.mode)
