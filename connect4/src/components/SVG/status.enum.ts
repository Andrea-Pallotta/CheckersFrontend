export enum Status {
    Player1,
    Player2,
    Empty,
}

export interface IProps {
    Status: Status;
    Color?: String;
}