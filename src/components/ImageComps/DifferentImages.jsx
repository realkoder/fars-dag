import Image from "next/image";
import { toast } from "sonner";

const DifferentImages = () => {
  return (
    <>
      <Image
        src="familie1.jpg"
        alt="Grand danois wearing costume"
        width={350}
        height={350}
        className="m-4 rounded-lg shadow-lg cursor-pointer"
        onClick={() => toast.info("Altid en fornøjelse med faacetime og drinxxx")}
      />
      <div className="flex justify-center">
        <Image
          src="amalie-sander.jpeg"
          alt="amalie og alex"
          width={70}
          height={70}
          className="m-2 rounded-lg shadow-lg cursor-pointer"
          onClick={() => toast.info("jajajajajaja 🤪🤪🤪")}
        />
        <Image
          src="malle-sander2.jpg"
          alt="Hundemad"
          width={70}
          height={70}
          className="m-2 rounded-lg shadow-lg cursor-pointer"
          onClick={() => toast.info("jajajajajaja 🤷‍♀️🤷‍♀️🤷‍♀️🤷‍♀️")}
        />
      </div>
      <Image
        src="malle-og-mor2.jpg"
        alt="Horse"
        width={350}
        height={350}
        className="m-4 rounded-lg shadow-lg cursor-pointer"
        onClick={() => toast.info("MORS DAG!")}
      />
      <Image
        src="malle-og-mor.jpg"
        alt="Birthday hat"
        width={350}
        height={350}
        className="m-4 rounded-lg shadow-lg cursor-pointer"
        onClick={() => toast.info("MORS DAG!")}
      />
      <Image
        src="mor2.jpg"
        alt="Mor"
        width={350}
        height={350}
        className="m-4 rounded-lg shadow-lg cursor-pointer"
        onClick={() => toast.info("SMART ALTSÅ!")}
      />
      <Image
        src="abba-mor-far.jpg"
        alt="ABBA"
        width={350}
        height={350}
        className="m-4 rounded-lg shadow-lg cursor-pointer"
        onClick={() => toast.info("ABBA!!!")}
      />
    </>
  );
};

export default DifferentImages;
