import { messageValidator, Twilio } from "@convex-dev/twilio";
import { components, internal } from "./_generated/api";
import { internalMutation } from "./_generated/server";

export const twilio = new Twilio(components.twilio, {
  // optionally pass in the default "from" phone number you'll be using
  // this must be a phone number you've created with Twilio
  defaultFrom: process.env.TWILIO_PHONE_NUMBER!,
});


