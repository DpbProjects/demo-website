import { v } from "convex/values";
import { action, internalMutation, query } from "./_generated/server";
import { twilio } from "./sms";
import { api, internal } from "./_generated/api";
import { messageValidator } from "@convex-dev/twilio";


export const sendSms = action({
  args: {
    body: v.string(),
  },
  handler: async (ctx, args) => {
    await twilio.sendMessage(ctx, {
      to: "whatsapp:+447982158312",
      body: args.body,
    });
  },
});

twilio.incomingMessageCallback = internal.messages.handleIncomingMessage;

export const getChatMessages = query({
  args: {},
  handler: async (ctx) => {
    return await twilio.list(ctx);
  },
});

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
