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
      <DialogContent className="bg-blue-400 h-full max-h-[90%] flex flex-col items-center">
        <DialogHeader>
          <DialogTitle className="flex justify-center items-center">
            <p className="text-xl text-center">FARS DAG</p>
            <Image
              src="https://samvirke.dk/sites/default/files/styles/16_9_xsmall/public/migrated/kh/khoksekoed.jpg.jpeg?itok=TZzNElWN"
              alt="Cykel"
              width={50}
              height={50}
              className="m-4 rounded-lg shadow-lg cursor-pointer"
              onClick={() => toast.info("HA HA HA 🤪🤪🤪")}
            />
          </DialogTitle>
          <DialogDescription className="text-2xl text-center">
            {emojis}
          </DialogDescription>
        </DialogHeader>
        <DialogDescription>
          <Image
            src="cykel-selfie.jpg"
            alt="Cykel"
            width={250}
            height={250}
            className="w-[300px] h-[300px] md:w-[350px] md:h-[450px] m-2 rounded-lg shadow-lg cursor-pointer"
            onClick={() => toast.info("🚴🚴🚴🚴")}
          />
        </DialogDescription>
      </DialogContent>
    </Dialog>
  );
}

export default FirstDialogBox;
