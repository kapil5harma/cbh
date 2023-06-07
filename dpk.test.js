const { deterministicPartitionKey } = require("./dpk");

describe("deterministicPartitionKey", () => {
  test("returns trivial partition key if no input is passed", () => {
    const result = deterministicPartitionKey();
    expect(result).toBe("0");
  });

  test("returns trivial partition key if event is falsy", () => {
    const result = deterministicPartitionKey(null);
    expect(result).toBe("0");
  });

  test("returns the partition key from event if present", () => {
    const event = { partitionKey: "abc123" };
    const result = deterministicPartitionKey(event);
    expect(result).toBe("abc123");
  });

  test("returns hash of event as the partition key if partitionKey is not present", () => {
    const event = { foo: "bar" };
    const result = deterministicPartitionKey(event);
    expect(result).toBe(
      "a419a15de4a65c3dba49c38b4485cd4dce1dde4d18f5b965d90f0649bef54252ec4e76dbcaa603708e8e8ebbe848ba484e81e23b7823808b5b8e5f4222d122e8"
    );
  });

  test("returns hash of stringified candidate if it's not a string", () => {
    const event = { foo: "bar" };
    const result = deterministicPartitionKey(event);
    expect(result).toBe(
      "a419a15de4a65c3dba49c38b4485cd4dce1dde4d18f5b965d90f0649bef54252ec4e76dbcaa603708e8e8ebbe848ba484e81e23b7823808b5b8e5f4222d122e8"
    );
  });

  test("returns hash of candidate if its length exceeds MAX_PARTITION_KEY_LENGTH", () => {
    const longString = "a".repeat(300);
    const event = { partitionKey: longString };
    const result = deterministicPartitionKey(event);
    expect(result).toBe(
      "7350d99d1a20435c283070f3613302edb7027fced163086b048bd3ded530c5cb7a8ced83d1c6fda78f8832c61fb02698d14252c6b4ecf6989b81b04ca99a6302"
    );
  });

  test("handles undefined event", () => {
    const result = deterministicPartitionKey(undefined);
    expect(result).toBe("0");
  });
});
