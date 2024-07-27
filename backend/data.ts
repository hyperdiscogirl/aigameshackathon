
export type User = {
	id: string;
	name: string;
}

export type Option = {
	text: String,
	emoji: String
  }

export type Choice = {
	user: User,
	option: Option
}

export type Turn = {
	options: Option[],
	userChoices: Choice[]
}

export type Round = {
	turns: Turn[]
}
  
export type GameState = {
	curRound: Round,
	curTurn: Turn,
	prevRounds: Round[]
  }
  
export type SessionSettings = {
	numRounds: number,
	timerLimit: number,
	numOptions: number,
  }

export type Session = {
	id: string;
	settings: {
		numRounds: number;
		numOptions: number;
		timerLimit: number;
	};
	teamname: string;
	admin: User;
	players: User[];
	gameState?: GameState

}

export type SessionMap = Map<string, Session>;

