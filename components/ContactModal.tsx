"use client";

import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

type Props = {
  open: boolean;
  setOpen: (open: boolean) => void;
};

export default function ContactModal({ open, setOpen }: Props) {
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent
        className="!max-w-[900px] !w-full p-0 mx-2 !mx-auto border-none rounded-2xl overflow-hidden [&>button]:text-white [&>button]:opacity-70 [&>button:hover]:opacity-100 [&>button]:z-50"
        style={{
          background:
            "radial-gradient(ellipse at 20% 50%, #2d1b6b 0%, #170f34 55%, #0f0a24 100%)",
        }}
      >
        <VisuallyHidden>
          <DialogTitle>Contact Us</DialogTitle>
          <DialogDescription>
            Our team is here to support you every step of the way.
          </DialogDescription>
        </VisuallyHidden>
        <div className="grid md:grid-cols-2 relative w-full min-h-[440px]">
          {/* Form */}
          <div className="relative z-10 p-6 sm:p-8">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl text-white border border-white/10">
              <h2 className="text-2xl font-semibold mb-2">Contact Us</h2>
              <p className="text-sm opacity-70 mb-5">
                Our team is here to support you every step of the way
              </p>

              <form className="space-y-3">
                <div className="flex flex-col gap-1">
                  <label className="text-xs text-white/60 font-medium">
                    Name
                  </label>
                  <input
                    type="text"
                    placeholder="Your name"
                    className="w-full bg-white/10 border border-white/10 text-white placeholder-white/30 p-3 rounded-xl outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all text-sm"
                  />
                </div>

                <div className="flex flex-col gap-1">
                  <label className="text-xs text-white/60 font-medium">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    className="w-full bg-white/10 border border-white/10 text-white placeholder-white/30 p-3 rounded-xl outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all text-sm"
                  />
                </div>

                <div className="flex flex-col gap-1">
                  <label className="text-xs text-white/60 font-medium">
                    Message
                  </label>
                  <textarea
                    placeholder="How can we help?"
                    rows={4}
                    className="w-full bg-white/10 border border-white/10 text-white placeholder-white/30 p-3 rounded-xl outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all text-sm resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-xl text-white font-semibold text-sm bg-[#5B2DC5] tracking-wide transition-all hover:opacity-90 active:scale-95"
                >
                  Contact US
                </button>
              </form>
            </div>
          </div>

          {/* Image — bigger, anchored bottom-0 right-0 */}
          <div className="absolute bottom-0 right-0 w-[100%] hidden md:flex justify-end">
            <Image
              src="/assets/img/contact.png"
              alt="contact"
              width={700}
              height={560}
            />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
