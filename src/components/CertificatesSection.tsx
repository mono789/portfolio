"use client";

import React from "react";
import Image from "next/image";

function CertificateCard({ certificate }: { certificate: { name: string; image: string; verifyLink: string } }) {
    return (
      <div className="flex flex-col items-center bg-slate-400/10 rounded-lg p-4 hover:bg-[var(--bg-hover)] trans">
        <div className="relative w-48 h-32">
          <Image
            src={certificate.image}
            alt={certificate.name}
            layout="fill"
            objectFit="contain"
            className="rounded-lg"
          />
        </div>
        <div className="mt-4 text-sm text-center break-words max-w-[200px]">
          {certificate.name}
        </div>
        <a
          href={certificate.verifyLink}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 text-blue-500 hover:text-blue-700 text-sm"
        >
          Verify Certificate
        </a>
      </div>
    );
  }

export function CertificatesSection({ data }: { data: { name: string; image: string; verifyLink: string }[] }) {
  return (
    <div className="flex flex-col items-center w-full space-y-8">
      <h2 className="text-2xl font-bold text-center my-8">My Certificates</h2>
      <div className="flex flex-wrap justify-center gap-6 max-w-[80%]">
        {data.map((certificate, i) => (
          <CertificateCard key={i} certificate={certificate} />
        ))}
      </div>
    </div>
  );
}