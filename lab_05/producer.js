const { Kafka } = require("kafkajs");

const run = async () => {
  const kafka = new Kafka({
    clientId: "lab_05",
    brokers: ["kafka:9092"],
  });

  const producer = kafka.producer();

  await producer.connect();

  setInterval(async () => {
    try {
      const message = new Date().toISOString();

      await producer.send({
        topic: "common",
        messages: [{ value: message }],
      });

      console.log("Message sent: ", message);
    } catch (e) {
      console.error("Error sending message:", e);
    }
  }, 5000);
};

run();
