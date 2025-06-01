import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Image from "next/image";
import { useEffect, useState } from "react";
import { toast } from "sonner";

function FirstDialogBox() {
  const ketcher = "🏸🏸🏸🏸🏸🏸🏸🏸🏸🏸";
  const flag = "🇩🇰🇩🇰🇩🇰🇩🇰🇩🇰🇩🇰🇩🇰🇩🇰🇩🇰🇩🇰";
  const [emojis, setEmojis] = useState(ketcher);
  const [open, setOpen] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setEmojis((cur) => (cur === ketcher ? flag : ketcher));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="bg-blue-400 flex flex-col justify-center">
        <DialogHeader>
          <DialogTitle className="text-2xl text-center">CYKEL FYR</DialogTitle>
          <DialogDescription className="text-2xl text-center">
            {emojis}
          </DialogDescription>
        </DialogHeader>
        <DialogDescription>
          <Image
            src="cykel-selfie.jpg"
            alt="Cykel"
            width={300}
            height={300}
            className="m-4 rounded-lg shadow-lg cursor-pointer"
            onClick={() => toast.info("🚴🚴🚴🚴")}
          />
        </DialogDescription>
      </DialogContent>
    </Dialog>
  );
}

export default FirstDialogBox;
