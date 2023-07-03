export function checkInput(input: any, name?: string) {
  switch (input) {
    case Array.isArray(input):
      if (input.length < 1) {
        return `please input all requirements`;
      }
      break;
    case typeof input === "string":
      if (!input) {
        return `${name} is required`;
      } else if (input.match(/^\d+$/g)) {
        return `${name} can't have numbers`;
      }
      break;
    case typeof input === "number":
      if (!input) {
        return `${name} is required`;
      }
      break;
    default:
      return "sorry";
  }
}
