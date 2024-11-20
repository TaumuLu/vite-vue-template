import childProcess from 'child_process'
import crypto from 'crypto'
import fs from 'fs'
import { resolve } from 'path'

function generateHashVersion() {
  const now = new Date().toISOString()
  const hash = crypto.createHash('sha256')
  hash.update(now)
  const version = hash.digest('hex')
  return version
}

export const writeVersion = (preset?: string) => {
  let commitHash = preset || generateHashVersion()
  try {
    commitHash = preset || childProcess.execSync('git rev-parse HEAD').toString().replace(/\n/g, '')
  } catch (err) {
    console.error('CommitHash 获取失败 vite.config.ts: ', err)
  }

  try {
    fs.writeFileSync(resolve(process.cwd(), './public/version.txt'), commitHash)
  } catch (err) {}

  return commitHash
}
