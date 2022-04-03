import { ActionType } from "../model/model";
import { MethodDecorator } from './decorators';

export class StringAction {
  @MethodDecorator(ActionType.Action2)
  getString(string: string) {
    return string;
  }
}