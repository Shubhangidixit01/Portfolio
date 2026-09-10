import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, subject, message } = body;

    // Validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    // In a production environment with environment variables (e.g. RESEND_API_KEY or FORMSPREE_KEY),
    // this can dispatch directly.
    // For Vercel deployment preview, we gracefully log and return success.
    console.log("[Contact Form Received]:", {
      timestamp: new Date().toISOString(),
      name,
      email,
      subject: subject || "Portfolio Ingestion Query",
      messageLength: message.length,
    });

    return NextResponse.json(
      {
        success: true,
        message: "Thank you, Shubhangi has received your message and will respond shortly!",
      },
      { status: 200 }
    );
  } catch (err: any) {
    console.error("[Contact API Error]:", err);
    return NextResponse.json(
      { error: "Internal server error. Please try again later or reach out directly via email." },
      { status: 500 }
    );
  }
}
