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
  const kam = "❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️";
  const mis = "🇩🇰🇩🇰🇩🇰🇩🇰🇩🇰🇩🇰🇩🇰🇩🇰🇩🇰🇩🇰";
  const [emojis, setEmojis] = useState(kam);

  useEffect(() => {
    const interval = setInterval(() => {
      setEmojis((cur) => (cur === kam ? mis : kam));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Dialog>
      <DialogTrigger
        className="bg-purple-600 font-bold py-2 px-4 rounded"
        onClick={() => {
          toast("DET ER DIN FØDSELSDAG!", {
            description: "KAM KAM KAM",
            duration: 5000,
          });
        }}
      >
        KLIK MIG
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-2xl">Dagen er mors - et digt</DialogTitle>
          <DialogDescription>{emojis}</DialogDescription>
          <DialogDescription
            className="text-lg text-left"
            style={{ maxHeight: "300px", overflowY: "auto" }}
          >
            Kære Mor, på denne særlige dag,
            <br></br>
            vil vi fejre dig, for alt hvad du gør,
            <br></br>
            Du er vores lys, vores trygge havn,
            <br></br>
            Med kærlighed og styrke, du altid er nær.
            <br></br>
            <br></br>
            Fra barndommens dage til nu, vi ser,
            <br></br>
            Din omsorg og varme, som altid er der,
            <br></br>
            Du lærer os livet, med visdom og smil,
            <br></br>
            Din kærlighed er gaven, der aldrig vil svinde.
            <br></br>
            <br></br>
            På mors dag hylder vi dig, vores bedste ven,
            <br></br>
            Med minder og glæde, vi vil altid være her,
            <br></br>
            Du er vores stjerne, vores hjerte, vores sang,
            <br></br>
            Tillykke, kære Mor, vi elsker dig så meget.
            <br></br>
            <br></br>
            Og tak for at vi altid kan ringe og du er der for os - det betyder ALT!
            <br></br>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}

export default DialogBox;
