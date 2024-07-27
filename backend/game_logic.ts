import {Option, Choice, Turn} from './data'

export function generateOptions(n: number, options: Option[]): Option [] {
	const opts: Option[] = []
	for (let i = 0; i < n; i++) {
		opts.push({text: "option" + i, emoji: "emoji" + i})
	}
	return opts
}


export function addOrUpdateChoice(choice: Choice, turn: Turn) {
	let present = false
	for (let i = 0; i < turn.userChoices.length; i++) {
		if (turn.userChoices[i].user.id === choice.user.id) {
			turn.userChoices[i] = choice
			present = true
		}
	}
	if (!present) {
		turn.userChoices.push(choice)
	}
}


export * as GameLogic from './game_logic'