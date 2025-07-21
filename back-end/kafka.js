const { Kafka } = require('kafkajs');

const kafka = new Kafka({
  clientId: 'aeteknoloji-app',
  brokers: ['localhost:9092']
});

const producer = kafka.producer();
const consumer = kafka.consumer({ groupId: 'aeteknoloji-group' });

async function run() {
  // Producer bağlantısı ve mesaj gönderme
  await producer.connect();
  await producer.send({
    topic: 'test-topic',
    messages: [
      { value: 'Merhaba Kafka!' }
    ],
  });
  console.log('Mesaj Kafka\'ya gönderildi!');

  // Consumer bağlantısı ve mesaj dinleme
  await consumer.connect();
  await consumer.subscribe({ topic: 'test-topic', fromBeginning: true });

  await consumer.run({
    eachMessage: async ({ topic, partition, message }) => {
      console.log(`Kafka'dan gelen mesaj: ${message.value.toString()}`);
    },
  });
}

run().catch(console.error); 