import * as request from 'request-promise-native';

export class ParentClass {

  private readonly host: string;

  constructor (host: string) {
    this.host = host;
  }

  async send(): Promise<any>{
    try {
      return await request.get({
        uri: `${this.host}/api/wishlists`,
        json: true
      });
    } catch(e) {
      return e.error;
    }
  }
}
