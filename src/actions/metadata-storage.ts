import { ActionType } from "../model/model";

declare module NodeJS {
  interface Global {
    ResolverMetadataStorage: MetadataStorage;
  }
}

declare global {
  var ResolverMetadataStorage: MetadataStorage;
}

export const getActionMethod = (actionKey: ActionType): Function => {
  const metadata = getMetadataStorage();
  const action = metadata.actions.find((action) => action.key === actionKey);

  if (!action) {
    throw Error('action not found');
  }

  return action.method;
}

export const getMetadataStorage = (): MetadataStorage => {
  return (
    global.ResolverMetadataStorage || (global.ResolverMetadataStorage = new MetadataStorage())
  );
};

interface MetadataAction {
  key: string;
  method: Function;
}

export class MetadataStorage {
  actions: MetadataAction[] = [];

  collectActions(action: MetadataAction) {
    if (this.actions.find((existingAction) => existingAction.key === action.key)) {
      throw Error(`${action.key} is beign utilized more then one time`);
    }
    this.actions.push(action);
  }
}