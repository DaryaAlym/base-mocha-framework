import {ParentClass} from "./ParentClass";

export class ChildClass extends ParentClass {

  private response: any;

  async send(): Promise<any>{
    this.response = await super.send();
    return this.response;
  }

  public  printResponse(): void {
    console.log(this.response);
  };
}
