import { NextRequest, NextResponse } from "next/server";
import getSession from "@/lib/getSession";
import { google } from "googleapis";
import prisma from "@/lib/prisma";
import { Account } from "@prisma/client";

export async function POST(request: NextRequest) {
  try {
    const { name, location, description, startDateTime, endDateTime } = await request.json();

    const event = {
      summary: name,
      location: location,
      description: description,
      start: {
        dateTime: startDateTime,
        timeZone: "Europe/London",
      },
      end: {
        dateTime: endDateTime,
        timeZone: "Europe/London",
      },
      reminders: {
        useDefault: false,
        overrides: [
          { method: "email", minutes: 24 * 60 },
          { method: "popup", minutes: 10 },
        ],
      },
    };

    const session = await getSession();

    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const clientId = process.env.AUTH_GOOGLE_ID;
    const clientSecret = process.env.AUTH_GOOGLE_SECRET;

    const account: Account = await prisma.account.findFirst({
      where: {
        userId: session.user.id,
      },
    });

    if (!account) {
      return NextResponse.json({ error: "Account not found" }, { status: 404 });
    }

    const auth = new google.auth.OAuth2({
      clientId,
      clientSecret,
    });

    auth.setCredentials({
      access_token: account.access_token,
      refresh_token: account.refresh_token,
    });
    

    const calendar = google.calendar({
      auth,
      version: "v3",
    });

    const data = await calendar.events.insert({
      calendarId: "primary",
      requestBody: event,
    });

    return NextResponse.json({ message: "Event added to calendar", data });
  } catch (error) {
    console.error("Error adding event to calendar:", error);
    return NextResponse.json({ error: "Failed to add event to calendar" }, { status: 500 });
  }
}