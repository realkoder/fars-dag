import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useEffect, useState } from "react";
import { toast } from "sonner";

function DialogBox() {
  const ketcher = "🏸🏸🏸🏸🏸🏸🏸🏸🏸🏸";
  const flag = "🇩🇰🇩🇰🇩🇰🇩🇰🇩🇰🇩🇰🇩🇰🇩🇰🇩🇰🇩🇰";
  const [emojis, setEmojis] = useState(ketcher);

  useEffect(() => {
    const interval = setInterval(() => {
      setEmojis((cur) => (cur === ketcher ? flag : ketcher));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Dialog>
      <DialogTrigger className="bg-blue-500 font-bold py-2 px-4 rounded hover:bg-white">
        FARS DAG
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-2xl">
            Dagen er fars - et digt
          </DialogTitle>
          <DialogDescription>{emojis}</DialogDescription>
          <DialogDescription
            className="text-lg text-left"
            style={{ maxHeight: "300px", overflowY: "auto" }}
          >
            Kære Far, på denne særlige dag,
            <br></br>
            <br></br>
            vil vi fejre dig, for alt hvad du gør i din sag,
            <br></br>
            Du er vores smil, vores sjove ven,
            <br></br>
            Med latter og badminton, du tager med herhen.
            <br></br>
            <br></br>
            Fra bankens dybder til vores hyggestunder,
            <br></br>
            Din varme og humor, som altid sikrer kunder,
            <br></br>
            Du lærer os livet, med visdom og grin,
            <br></br>
            På fars dag hylder vi dig så fin.
            <br></br>
            Med minder og glæde, vi vil altid være her,
            <br></br>
            Du er vores far og i vor hjerte nær.
            <br></br>
            Tillykke, kære Far!
            <br></br>
            <br></br>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}

export default DialogBox;
