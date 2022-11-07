const string = "hello world";

const array = [1, 2];

try {
  const result = filter(string, () => {});

  console.assert(false);
} catch (error) {
  console.assert(error instanceof Error);
  console.assert(error.message === "First argument is not an array");
}
