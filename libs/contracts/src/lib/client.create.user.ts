export namespace CreateUser {
  export const command = { cmd: 'create.user' };

  export class Request {
    id: string;
  }

  export class Response {
    id: string;
  }
}
