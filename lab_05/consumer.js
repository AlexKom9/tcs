const kafka = require("kafka-node");

const Consumer = kafka.Consumer;

const client = new kafka.KafkaClient({ kafkaHost: "localhost:9092" });

const consumer = new Consumer(client, [{ topic: "common", partition: 0 }], {
  autoCommit: true,
});

consumer.on("message", (message) => {
  console.log("Received message:", message.value);
});

consumer.on("error", (error) => {
  console.error("Error:", error);
});
