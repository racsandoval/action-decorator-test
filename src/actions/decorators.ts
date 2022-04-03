import { getMetadataStorage } from "./metadata-storage";

export const MethodDecorator = (value: any): Function => {
  return function (
    _: Object, __: string, descriptor: PropertyDescriptor,
  ) {
    getMetadataStorage().collectActions({
      key: value,
      method: descriptor.value,
    });
  }
}