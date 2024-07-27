import { Session } from './data';
import fs from 'fs';

const DB_PATH = 'db.json';


export function SessionCreate(session: Session) {
	const db = JSON.parse(fs.readFileSync(DB_PATH, 'utf8'));
	db[session.id] = session;
	fs.writeFileSync(DB_PATH, JSON.stringify(db));
}

export function SessionRead(id: string): Session {
	const db = JSON.parse(fs.readFileSync(DB_PATH, 'utf8'));
	const data = db[id];
	return data as Session;
}

export function SessionUpdate(id: string, session: Session) {
	fs.writeFileSync
}

export function SessionDelete(id: string) {
	const db = JSON.parse(fs.readFileSync(DB_PATH, 'utf8'));
	delete db[id];
	fs.writeFileSync(DB_PATH, JSON.stringify(db));
}