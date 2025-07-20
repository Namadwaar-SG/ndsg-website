export const runtime = "nodejs";
import { NextResponse } from "@node_modules/next/server";
import { Storage } from "@node_modules/@google-cloud/storage";

const storage = new Storage({
  projectId: process.env.STORAGE_BUCKET_PROJECT_ID,
  credentials: {
    client_email: process.env.VIEW_STORAGE_BUCKET_FILES_CLIENT_EMAIL,
    private_key: process.env.VIEW_STORAGE_BUCKET_FILES_PRIVATE_KEY.replace(
      /\\n/g,
      "\n"
    ),
  },
});

const bucket = storage.bucket(process.env.STORAGE_BUCKET_NAME);

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const prefix = searchParams.get("folder") || "";

  try {
    const [files] = await bucket.getFiles({ prefix });

    const signedUrls = await Promise.all(
      files.map(async (file) => {
        const [url] = await file.getSignedUrl({
          action: "read",
          expires: Date.now() + 5 * 60 * 1000,
        });

        return {
          name: file.name,
          url,
        };
      })
    );

    signedUrls.sort((a, b) => {
      const numA = parseInt(
        a.name.replace("newsletter_two/", "").replace(/\D/g, ""),
        10
      );
      const numB = parseInt(
        b.name.replace("newsletter_two/", "").replace(/\D/g, ""),
        10
      );
      return numA - numB;
    });

    return NextResponse.json(signedUrls);
  } catch (err) {
    console.error("GCS error:", err);
    return NextResponse.json(
      { error: "Failed to fetch files" },
      { status: 500 }
    );
  }
}
