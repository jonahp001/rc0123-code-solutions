/* exported defaults */

function defaults(target, source) {
  for (var sourceKey in source) {
    if (sourceKey in target === false) {
      target[sourceKey] = source[sourceKey];
    }
  }
}
