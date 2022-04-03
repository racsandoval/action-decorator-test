import glob from 'glob';

function fileLoader(dir: string) {
  const files = glob.sync(dir);
  return files
    .map((file) => require(file))
}

export function configActions(resolver: string[]) {
  resolver.map((str) => fileLoader(str));
}