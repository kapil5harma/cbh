# Refactoring

You've been asked to refactor the function `deterministicPartitionKey` in [`dpk.js`](dpk.js) to make it easier to read and understand without changing its functionality. For this task, you should:

1. Write unit tests to cover the existing functionality and ensure that your refactor doesn't break it. We typically use `jest`, but if you have another library you prefer, feel free to use it.
2. Refactor the function to be as "clean" and "readable" as possible. There are many valid ways to define those words - use your own personal definitions, but be prepared to defend them. Note that we do like to use the latest JS language features when applicable.
3. Write up a brief (~1 paragraph) explanation of why you made the choices you did and why specifically your version is more "readable" than the original.

You will be graded on the exhaustiveness and quality of your unit tests, the depth of your refactor, and the level of insight into your thought process provided by the written explanation.

## Your Explanation Here

- The initial value of candidate is set to TRIVIAL_PARTITION_KEY, assuming event is not present.
- Inside the if (event) block, optional chaining (event?.partitionKey) is used to safely access the partitionKey property. If it's null or undefined, the nullish coalescing operator (??) provides the fallback value of hashing JSON.stringify(event) using SHA3-512.
- The typeof check ensures that candidate is a string. If it's not, it is stringified using JSON.stringify.
- The code then checks if the length of candidate exceeds MAX_PARTITION_KEY_LENGTH. If it does, it is hashed using SHA3-512.
