export interface TimezoneI {
	datetime: string;
}

export enum FETCH_STATUS {
	LOADING = 'loading',
	ERROR = 'error',
	SUCCESS = 'success',
	IDLE = 'idle',
}
