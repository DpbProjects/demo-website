"use node";

import { action } from "./_generated/server";
import { v } from "convex/values";
import { api } from "./_generated/api";

export const sendWhatsAppTemplate = action({
  args: {
    to: v.string(),
    contentSid: v.string(),
    contentVariables: v.optional(v.string()),
  },
  returns: v.object({
    success: v.boolean(),
    messageSid: v.string(),
    status: v.string(),
  }),
  handler: async (ctx, args) => {
    const twilio = require("twilio");

    const client = twilio(
      process.env.TWILIO_ACCOUNT_SID,
      process.env.TWILIO_AUTH_TOKEN
    );

    try {
      const message = await client.messages.create({
        from: "whatsapp:+14155238886", // Twilio Sandbox number
        to: `whatsapp:${args.to}`,
        contentSid: args.contentSid,
        contentVariables: args.contentVariables,
      });

      console.log("WhatsApp template message sent:", message.sid);

      return {
        success: true,
        messageSid: message.sid,
        status: message.status,
      };
    } catch (error) {
      console.error("WhatsApp template send error:", error);
      throw new Error(`Failed to send WhatsApp template: ${error}`);
    }
  },
});

export const sendAppointmentReminder = action({
  args: {
    to: v.string(),
    date: v.string(),
    time: v.string(),
  },
  returns: v.object({
    success: v.boolean(),
    messageSid: v.string(),
    status: v.string(),
  }),
  handler: async (ctx, args) => {
    const contentVariables = JSON.stringify({
      "1": args.date,
      "2": args.time,
    });

    const result: {
      success: boolean;
      messageSid: string;
      status: string;
    } = await ctx.runAction(api.twilioNode.sendWhatsAppTemplate, {
      to: args.to,
      contentSid: "HXe885f5080ad23cd83492efd0c0bf7a19",
      contentVariables,
    });

    return result;
  },
});
