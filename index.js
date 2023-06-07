const { deterministicPartitionKey } = require("./dpk");

const longString = "a".repeat(300);

console.log("1. No Input:\n  ", deterministicPartitionKey());
console.log("\n2. Falsy Event:\n  ", deterministicPartitionKey(null));
console.log("\n3. With partitionKey:\n  ", deterministicPartitionKey({ partitionKey: "abc123" }));
console.log("\n4. Event without partitionKey:\n  ", deterministicPartitionKey({ foo: "bar" }));
console.log("\n5. Event without partitionKey:\n  ", deterministicPartitionKey({ foo: "bar" }));
console.log("\n6. Event with partitionKey longer than MAX_PARTITION_KEY_LENGTH:\n  ", deterministicPartitionKey({ partitionKey: longString }));
