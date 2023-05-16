const { Kafka } = require("kafkajs");

const run = async () => {
  const kafka = new Kafka({
    clientId: "lab_05",
    brokers: ["kafka:9092"],
  });

  const consumer = kafka.consumer({ groupId: "common-group" });

  await consumer.connect();

  await consumer.subscribe({ topic: "common", fromBeginning: true });

  await consumer.run({
    eachMessage: async ({ topic, partition, message }) => {
      console.log(`Message received: ${message.value.toString()}`);
    },
  });
};

run();
