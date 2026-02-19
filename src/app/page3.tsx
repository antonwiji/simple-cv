"use client";

import { useRef } from "react";
import { useForm } from "react-hook-form";
import ResumePreview from "@/components/ResumePreview";
import {
  Group,
  Panel,
  Separator,
} from "react-resizable-panels";
import html2pdf from "html2pdf.js";

export default function Home() {
  const { register, watch } = useForm();
  const data = watch();
  const previewRef = useRef<HTMLDivElement>(null);

  const handleDownload = () => {
    if (!previewRef.current) return;

      new html2pdf.Worker()
        .set({
            margin: 0,
            filename: "resume.pdf",
            html2canvas: {scale: 2},
            jsPDF: {
                unit: "mm",
                format: "a4",
                orientation: "portrait",
            }
        })
        .from(previewRef.current)
        .save()
  };

  return (

      <div className="h-screen flex flex-col">

        {/* 🔥 Sticky Toolbar */}
        <div className="h-14 bg-white shadow flex items-center justify-between px-6 sticky top-0 z-50">
          <h1 className="font-bold">DevCV Builder</h1>
          <button
              onClick={handleDownload}
              className="bg-black text-white px-4 py-2 rounded"
          >
            Download PDF
          </button>
        </div>

        {/* Content */}
        <div className="flex-1">
          <Group>

            {/* LEFT PANEL */}
            <Panel defaultSize={40}>
              <div className="p-6 bg-gray-100 h-full overflow-auto">
                <input {...register("name")} placeholder="Full Name" className="input" />
                <input {...register("email")} placeholder="Email" className="input" />
                <input {...register("phone")} placeholder="Phone" className="input" />
                <textarea {...register("summary")} placeholder="Summary" className="input h-20" />
                {/*<textarea {...register("experience")} placeholder="Experience (buat panjang untuk test page break)" className="input" />*/}
              </div>
            </Panel>

            <Separator className="w-2 bg-gray-300" />

            {/* RIGHT PANEL */}
            <Panel defaultSize={60}>
              <div className="h-full overflow-auto bg-gray-200 flex justify-center py-10">
                <div ref={previewRef}>
                  <ResumePreview data={data} />
                </div>
              </div>
            </Panel>

          </Group>
        </div>

        <style jsx global>{`
        .input {
          width: 100%;
          border: 1px solid #ddd;
          padding: 8px;
          margin-bottom: 10px;
          border-radius: 4px;
        }

        .resume-wrapper {
          width: 794px;
        }

        .resume-page {
            width: 210mm;
            height: 297mm;
            background: #ffffff;
            padding: 20mm;
            box-sizing: border-box;
            overflow: hidden;
        }

        @media print {
          .resume-page {
            box-shadow: none;
            margin: 0;
          }
        }
      `}</style>
      </div>
  );
}
