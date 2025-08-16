import { NextResponse } from "next/server";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const fileUrl = searchParams.get("url");

  if (!fileUrl) {
    return NextResponse.json(
      { error: "Missing url parameter" },
      { status: 400 }
    );
  }

  try {
    const driveRes = await fetch(fileUrl, { cache: "no-store" });

    if (!driveRes.ok) {
      return NextResponse.json(
        { error: "Failed to fetch PDF" },
        { status: driveRes.status }
      );
    }

    const arrayBuffer = await driveRes.arrayBuffer();

    return new NextResponse(arrayBuffer, {
      status: 200,
      headers: {
        "Content-Type": "application/pdf",
        // allow browser to treat this as downloadable if needed
        "Content-Disposition": "inline; filename=file.pdf",
      },
    });
  } catch (err) {
    return NextResponse.json(
      { error: "Server error fetching PDF" },
      { status: 500 }
    );
  }
}
