import { v } from "convex/values";
import {
  action,
  internalAction,
  internalMutation,
  query,
} from "./_generated/server";
import { twilio } from "./sms";
import { api, internal } from "./_generated/api";
import { messageValidator } from "@convex-dev/twilio";

twilio.incomingMessageCallback = internal.messages.handleIncomingMessage;

export const sendSms = action({
  args: {
    body: v.string(),
  },
  handler: async (ctx, args) => {
    await twilio.sendMessage(ctx, {
      to: "whatsapp:+447474657765",
      body: args.body,
    });
  },
});

export const getChatMessages = query({
  args: {},
  handler: async (ctx) => {
    return await twilio.list(ctx);
  },
});

// export const registerIncomingSmsHandler = internalAction({
//   args: { sid: v.string() },
//   handler: async (ctx, args) => {
//     return await twilio.registerIncomingSmsHandler(ctx, {
//       sid: args.sid,
//     });
//   },
// });

// This is the webhook that is called when an SMS is received. This is just for testing purposes.
export const handleIncomingMessage = internalMutation({
  args: {
    message: messageValidator,
  },
  handler: async (ctx, message) => {
    console.log("🎉 WEBHOOK CALLED! Incoming message received:", message);
    console.log("From:", message.message.from);
    console.log("To:", message.message.to);
    console.log("Body:", message.message.body);

    // Store the message or do something with it
    return { success: true };
  },
});

export const triggerSms = action({
  args: {
    body: v.string(),
  },
  handler: async (ctx, args) => {
    await ctx.runAction(api.messages.sendSms, {
      body: args.body,
    });
    return { success: true };
  },
});
