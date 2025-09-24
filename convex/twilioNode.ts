import twilio from "twilio";

const client = twilio(
  process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_AUTH_TOKEN
);

client.messages.create({
  to: "+447982158312",
  from: "+447982158312",
  body: "Hello, this is a test message",
});
