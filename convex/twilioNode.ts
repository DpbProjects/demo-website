"use node";

import { action } from "./_generated/server";
import { v } from "convex/values";
import { api } from "./_generated/api";
import Twilio from "twilio";

const accountSid = process.env.TWILIO_ACCOUNT_SID!;
const authToken = process.env.TWILIO_AUTH_TOKEN!;

const client = Twilio(accountSid, authToken);

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
    try {
      const message = await client.messages.create({
        from: process.env.TWILIO_PHONE_NUMBER!,
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
    contentSid: v.optional(v.string()),
  },
  returns: v.object({
    success: v.boolean(),
    messageSid: v.string(),
    status: v.string(),
  }),
  handler: async (ctx, args) => {
    try {
      const contentVariables = JSON.stringify({
        "1": args.date,
        "2": args.time,
      });

      const message = await client.messages.create({
        from: process.env.TWILIO_PHONE_NUMBER!,
        to: `whatsapp:${args.to}`,
        contentSid: args.contentSid || "HXe885f5080ad23cd83492efd0c0bf7a19",
        contentVariables,
      });

      console.log("WhatsApp appointment reminder sent:", message.sid);

      return {
        success: true,
        messageSid: message.sid,
        status: message.status,
      };
    } catch (error) {
      console.error("WhatsApp appointment reminder error:", error);
      throw new Error(`Failed to send WhatsApp appointment reminder: ${error}`);
    }
  },
});
