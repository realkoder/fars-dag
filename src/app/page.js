"use client";

import DialogBox from "@/components/DialogBox/DialogBox";
import FirstDialogBox from "@/components/FirstDialogBox/FirstDialogBox";
import DifferentImages from "@/components/ImageComps/DifferentImages";
import FlagImages from "@/components/ImageComps/FlagImages";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Toaster, toast } from "sonner";

export default function Home() {
  const handHoldFlagUrl =
    "https://fest4all.dk/cdn/shop/products/1050-00010_79304686_26443501-481b-4ab8-a58e-5527cfefa52e.jpg?v=1578583169";
  const classicFlagUrl =
    "https://kija-design.dk/images/foedselsdagsflag-kageflag-dannebrogflag-dansk-flag-ss797416_1-t.webp";

  const [flagUrl, setFlagUrl] = useState(handHoldFlagUrl);
  const [showBadeHat, setShowBadeHat] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setFlagUrl((cur) =>
        cur === handHoldFlagUrl ? classicFlagUrl : handHoldFlagUrl,
      );
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <main className="text-center">
      <h1 className="text-3xl my-4">FARS DAG</h1>
      <div className="flex flex-row justify-center m-4">
        <FlagImages flagUrl={flagUrl} />
      </div>

      <div className="flex justify-center">
        <div className="flex flex-col items-center m-4">
          <DifferentImages />
        </div>

        <div className="flex flex-col items-center m-4">
          <Toaster />
          <h1 className="text-lg my-8">
            TILLYKKE MED FARS DAG DU KÆRE FAR, KNUS ALEX & MALLE! 🇩🇰{" "}
          </h1>
          <DialogBox />
          <FirstDialogBox />
          <p className="font-sans leading-relaxed my-8 text-xl">
            Jamen så blev det jo FARS dag og du skal fejres derfor denne
            hjemmeside!! <br></br>
            Her er en lille dum hjemmeside fra{" "}
            <span className="font-bold">DINE BØRN</span> til{" "}
            <span className="font-bold">DIG</span>! <br></br>
            Klik lidt rundt og se hvad den kan{" "}
            <span className="italic">Måske du får lidt overraskelser</span>
          </p>
          {!showBadeHat && (
            <Button
              className="bg-blue-500"
              variant="outline"
              onClick={() => {
                setShowBadeHat(true);
                setTimeout(() => setShowBadeHat(false), 3000);
              }}
            >
              KLIK HER HVIS DU TØR - det knivskarpt<br></br>
            </Button>
          )}

          {showBadeHat && (
            <div>
              <Image
                src="https://images.jfmedier.dk/images/f/f3/f36/f36d1f8c-5c34-47b5-86d8-c82eabeb8feb_2_90_0_0_709_1004_880_1246_21701edb.jpg"
                alt="Far"
                width={200}
                height={200}
                className="m-2 rounded-lg shadow-lg cursor-pointer"
                onClick={() =>
                  toast.info(
                    "SÅ BLEV DET FARS DAG og blyanterne er altid spidsede!",
                  )
                }
              />
              <Image
                src="https://images.jfmedier.dk/images/a/a5/a51/a51a95c1-5cdf-4f18-9fba-a3f1f91fc9ac_2_90_0_0_6000_4000_1440_960_b9955766.jpg"
                alt="Vores far og din mand"
                width={200}
                height={200}
                className="m-2 rounded-lg shadow-lg cursor-pointer"
                onClick={() =>
                  toast.info(
                    "SÅ BLEV DET FARS DAG og den kære papa er også lige med - hihiihi!",
                  )
                }
              />
            </div>
          )}
          <Image
            src="pizza.jpeg"
            alt="Pizza"
            width={350}
            height={350}
            className="m-4 rounded-lg shadow-lg cursor-pointer"
            onClick={() => toast.info("🍕🍕🍕🍕")}
          />
          <Image
            src="mor-far.png"
            alt="Mor og far"
            width={350}
            height={350}
            className="m-4 rounded-lg shadow-lg cursor-pointer"
            onClick={() => toast.info("I ER DA SØDE")}
          />
          <Image
            src="https://images.jfmedier.dk/images/a/a5/a51/a51a95c1-5cdf-4f18-9fba-a3f1f91fc9ac_2_90_0_0_6000_4000_1440_960_b9955766.jpg"
            alt="Det er far"
            width={350}
            height={350}
            className="m-4 rounded-lg shadow-lg cursor-pointer"
            onClick={() => toast.info("BANK MAN 🏦")}
          />
        </div>

        <div className="flex flex-col items-center m-4">
          <DifferentImages />
        </div>
      </div>

      <div className="flex flex-row justify-center m-4">
        <FlagImages flagUrl={flagUrl} />
      </div>
    </main>
  );
}
