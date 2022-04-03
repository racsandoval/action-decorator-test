import { ActionType } from "../model/model";
import { MethodDecorator } from './decorators';

export class NumberAction {
  @MethodDecorator(ActionType.Action1)
  getNumber(number: number) {
    return number;
  }
}