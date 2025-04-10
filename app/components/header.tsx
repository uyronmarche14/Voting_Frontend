import React from "react";
import { BaseProps, ButtonVariant } from "@/app/types/ui";

interface header extends BaseProps {
  title: string;
  paragraph: string;
}

export default function header_page({ title, paragraph }: header) {
  return (
    <div className="text-center mb-12 sm:mb-12">
      <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-2 sm:mb-4">
        {title}
      </h2>
      <p className="text-gray-600 text-lg sm:text-xl max-w-2xl mx-auto">
        {paragraph}
      </p>
    </div>
  );
}
