import express from 'express'
const app = express()

app.get('/', (req, res) => {
  res.json({ pid: process.pid })
})
console.log('PID', process.pid)
export default app