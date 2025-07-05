"use client";
export const dynamicImport = "force-dynamic";
import React, { useState, useEffect } from "react";
import "react-quill/dist/quill.snow.css";
import dynamic from "next/dynamic";
import { useRouter } from "@node_modules/next/navigation";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

const Upload = () => {
  const [text, setText] = useState("");
  const [files, setFiles] = useState([]);
  const [previews, setPreviews] = useState([]); // preview URLs
  const [title, setTitle] = useState("");
  const today = new Date().toISOString().split("T")[0];
  const [date, setDate] = useState(today);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      [{ size: ["small", false, "large", "huge"] }],
      [{ color: [] }, { background: [] }],
      ["bold", "italic", "underline"],
      [{ list: "ordered" }, { list: "bullet" }],
      ["link", "image", "video"],
      [{ align: [] }],
      ["clean"],
    ],
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      Promise.all([import("react-quill"), import("quill")]).then(
        ([{ default: ReactQuill }, quill]) => {
          const Quill = quill.default; // ✅ use .default to get the Quill constructor
          const Video = Quill.import("formats/video");

          class CustomVideo extends Video {
            static create(value) {
              const node = super.create(value);
              node.setAttribute("width", "640");
              node.setAttribute("height", "360");
              return node;
            }
          }

          Quill.register("formats/video", CustomVideo);
        }
      );
    }
  }, []);

  const uploadToCloudinary = async (file) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append(
      "upload_preset",
      `${process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET}`
    );

    const res = await fetch(
      `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_SERVICE_KEY}/image/upload`,
      {
        method: "POST",
        body: formData,
      }
    );

    const data = await res.json();
    return data.secure_url;
  };

  useEffect(() => {
    if (!files.length) {
      setPreviews([]);
      return;
    }

    const objectUrls = files.map((file) => URL.createObjectURL(file));
    setPreviews(objectUrls);

    return () => objectUrls.forEach((url) => URL.revokeObjectURL(url));
  }, [files]);

  const handleSubmit = async () => {
    if (!files || files.length === 0 || title === "" || text === "") return;

    setLoading(true);
    try {
      const urls = await Promise.all(files.map(uploadToCloudinary));

      // Send URLs to your backend
      await fetch("/api/save-post", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title: title,
          date: date,
          images: urls,
          richText: text,
        }),
      });

      alert("Post updated successfully!");
    } catch (err) {
      console.error(err);
      alert("Upload failed");
    } finally {
      setLoading(false);
      router.push("/events");
    }
  };

  const handleFileChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    setFiles((prev) => [...prev, ...selectedFiles]);
    e.target.value = null;
  };

  const removeFile = (index) => {
    setFiles((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="w-full min-h-screen mx-auto p-4 bg-beige">
      <h1 className="m-10 font-caudex text-4xl max-md:text-3xl max-md:leading-8 font-bold text-primary-maroon text-center">
        Upload Event Post
      </h1>
      <div className="flex flex-col items-center justify-center">
        <label
          className={`inline-block px-4 py-2 bg-blue-600 text-white rounded cursor-pointer ${
            files.length === 5
              ? "bg-gray-400 text-gray-700 cursor-not-allowed"
              : "bg-blue-600 text-white"
          }`}
        >
          Upload Images
          <input
            type="file"
            multiple
            accept="image/*"
            onChange={handleFileChange}
            className="hidden"
            disabled={files.length === 5}
          />
        </label>
        {files.length > 0 && (
          <>
            <p className="my-2">Selected {files.length} file(s) (max 5)</p>
            {/* Image previews */}
            <div className="flex flex-wrap gap-4 mb-4">
              {previews.map((src, i) => (
                <div key={i} className="relative">
                  <img
                    key={i}
                    src={src}
                    alt={`Preview ${i + 1}`}
                    className="max-w-48 max-h-48 w-auto h-auto object-contain rounded border"
                  />
                  <button
                    type="button"
                    onClick={() => removeFile(i)}
                    className="absolute top-0 right-0 bg-red-600 text-white rounded-full px-1.5 text-sm"
                    aria-label="Remove image"
                  >
                    ×
                  </button>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
      <div className="my-4 p-4 rounded shadow">
        <div>
          <label className="block mb-1 font-medium">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border p-2 w-full rounded"
            required
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Date</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="border p-2 w-full rounded"
            required
          />
        </div>
      </div>
      <div className="my-4 p-4 rounded shadow">
        <label className="block mb-1 font-medium">Post Content</label>
        <ReactQuill
          value={text}
          onChange={setText}
          modules={modules || { toolbar: [] }}
          className="[&_.ql-editor]:h-[450px] [&_.ql-editor]:overflow-y-auto 
          [&_.ql-editor]:leading-6 [&_.ql-editor]:p-2 bg-white"
        />
      </div>
      <button
        type="button"
        onClick={handleSubmit}
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:opacity-50"
        disabled={loading}
      >
        {loading ? "Uploading..." : "Submit"}
      </button>
    </div>
  );
};

export default Upload;
