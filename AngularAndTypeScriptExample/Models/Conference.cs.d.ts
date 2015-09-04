/// <reference path="Speaker.cs.d.ts" />

declare module server {
	interface Conference {
		id: number;
		name: string;
		description: string;
		speakerId: number;
		speaker: server.Speaker;
	}
}
