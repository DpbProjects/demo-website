import { httpAction } from "./_generated/server";
import { twilio } from "./sms";
import { httpRouter } from "convex/server";

const http = httpRouter();
// this call registers the routes necessary for the component

twilio.registerRoutes(http);
export default http;
