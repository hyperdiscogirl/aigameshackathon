import express, {Request, Response} from 'express'
import { Session } from './data'
import {SessionCreate} from './database'
// import { PrismaClient } from '@prisma/client'

// const prisma = new PrismaClient()

const app = express()
const port = 3000

app.use(express.json())


app.post('/create-session', (req: Request, res: Response) => {
	const {username, teamname} = req.body
	const admin = {name: username as string, id: "1"}
	const session: Session = {
		id: "1",
		settings: {numRounds: 5, numOptions: 15, timerLimit: 30},
		teamname: teamname,
		admin: admin,
		players: [admin]
	 }
	 SessionCreate(session)
	 res.send('Hello World!')
	})


app.get('/', (req: Request, res: Response) => {
	console.log("haaaaaaaaaaaaaafdsafasdfsi")
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

