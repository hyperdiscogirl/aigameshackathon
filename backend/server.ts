import express, {Request, Response} from 'express'
import { Session, Option, User} from './data'
import {SessionCreate, SessionRead} from './database'
import { GameLogic } from './game_logic'
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
		players: [admin],
		hasStarted: false
	 }
	 SessionCreate(session)
	 res.send('Hello World!')
	})

app.get('/get-session', (req: Request, res: Response) => {
	const session = SessionRead("1")
	res.send(session)
})

app.post('/join-session', (req: Request, res: Response) => {
	const {username} = req.body
	const session = SessionRead("1")
	session.players.push({name: username as string, id: username as string})
	SessionCreate(session)
})

app.post('/start-game', (req: Request, res: Response) => {
	const session = SessionRead("1")
	session.gameState = {
		curRound: {
			turns: []
		},
		curTurn: {
			options: GameLogic.generateOptions(session.settings.numOptions, []),
			userChoices: []
		},
		prevRounds: []
	}
	SessionCreate(session)
})

app.post('/submit-choice', (req: Request, res: Response) => {
	const {option, user} = req.body
	const session = SessionRead("1")
	const choice = {user: user as User, option: option as Option}
	session.gameState?.curTurn.userChoices.push(choice)

})


app.get('/', (req: Request, res: Response) => {
	console.log("haaaaaaaaaaaaaafdsafasdfsi")
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

