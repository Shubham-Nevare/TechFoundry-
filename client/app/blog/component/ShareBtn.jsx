"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Share2, Link as LinkIcon, Check, Linkedin, Twitter, MessageCircle } from "lucide-react";
import { toast } from "sonner";

export default function ShareBtn({ postTitle }) {
  const [copied, setCopied] = useState(false);

  const currentUrl =
    typeof window !== "undefined" ? window.location.href : "https://developous.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(currentUrl);
    setCopied(true);
    toast.success("🔗 Link copied to clipboard!");
    setTimeout(() => setCopied(false), 2000);
  };

  const shareLinks = {
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
      currentUrl
    )}`,
    twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(
      postTitle
    )}&url=${encodeURIComponent(currentUrl)}&via=Developous`,
    whatsapp: `https://api.whatsapp.com/send?text=${encodeURIComponent(
      postTitle + " - " + currentUrl
    )}`,
  };

  return (
    <div className="mt-12 pt-8 border-t border-gray-200">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <h3 className="text-lg font-semibold text-gray-900">
          Share this article
        </h3>

        <div className="flex items-center gap-3 flex-wrap">
          {/* LinkedIn */}
          <Button
            variant="outline"
            size="sm"
            onClick={() => window.open(shareLinks.linkedin, "_blank")}
            className="flex items-center gap-2 hover:bg-blue-50 transition-all"
          >
            <Linkedin className="h-4 w-4 text-blue-600" />
            LinkedIn
          </Button>

          {/* Twitter */}
          <Button
            variant="outline"
            size="sm"
            onClick={() => window.open(shareLinks.twitter, "_blank")}
            className="flex items-center gap-2 hover:bg-blue-50 transition-all"
          >
            <Twitter className="h-4 w-4 text-sky-500" />
            Twitter
          </Button>

          {/* WhatsApp */}
          <Button
            variant="outline"
            size="sm"
            onClick={() => window.open(shareLinks.whatsapp, "_blank")}
            className="flex items-center gap-2 hover:bg-green-50 transition-all"
          >
            <MessageCircle className="h-4 w-4 text-green-600" />
            WhatsApp
          </Button>

          {/* Copy Link */}
          <Button
            variant="outline"
            size="sm"
            onClick={handleCopy}
            className="flex items-center gap-2 hover:bg-gray-50 transition-all"
          >
            {copied ? (
              <>
                <Check className="h-4 w-4 text-green-600" />
                Copied
              </>
            ) : (
              <>
                <LinkIcon className="h-4 w-4 text-gray-500" />
                Copy Link
              </>
            )}
          </Button>

          {/* General Share (mobile native) */}
          <Button
            variant="default"
            size="sm"
            onClick={() => {
              if (navigator.share) {
                navigator.share({
                  title: postTitle,
                  url: currentUrl,
                });
              } else {
                handleCopy();
              }
            }}
            className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:opacity-90"
          >
            <Share2 className="h-4 w-4" />
            Share
          </Button>
        </div>
      </div>
    </div>
  );
}
