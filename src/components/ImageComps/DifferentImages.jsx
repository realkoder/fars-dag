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
        onClick={() =>
          toast.info("Altid en fornøjelse med faacetime og drinxxx")
        }
      />
      <div className="flex justify-center">
        <Image
          src="amalie-sander.jpeg"
          alt="amalie og alex"
          width={60}
          height={60}
          className="m-2 rounded-lg shadow-lg cursor-pointer"
          onClick={() => toast.info("jajajajajaja 🤪🤪🤪")}
        />
        <Image
          src="malle-sander2.jpg"
          alt="Hundemad"
          width={50}
          height={50}
          className="m-2 rounded-lg shadow-lg cursor-pointer"
          onClick={() => toast.info("jajajajajaja 🤷‍♀️🤷‍♀️🤷‍♀️🤷‍♀️")}
        />
      </div>
      <Image
        src="far-closeup.jpg"
        alt="Horse"
        width={350}
        height={350}
        className="m-4 rounded-lg shadow-lg cursor-pointer"
        onClick={() => toast.info("FARS DAG!")}
      />
      <Image
        src="malle-far.jpeg"
        alt="Birthday hat"
        width={350}
        height={350}
        className="m-4 rounded-lg shadow-lg cursor-pointer"
        onClick={() => toast.info("FARS DAG!")}
      />
      <Image
        src="another-closeup.jpeg"
        alt="FAR"
        width={350}
        height={350}
        className="m-4 rounded-lg shadow-lg cursor-pointer"
        onClick={() => toast.info("🤪🤪🤪!")}
      />
      <Image
        src="selfie-hat.jpg"
        alt="DE FRANCE"
        width={350}
        height={350}
        className="m-4 rounded-lg shadow-lg cursor-pointer"
        onClick={() => toast.info("STILEN FEJLER INTET!!!")}
      />
    </>
  );
};

export default DifferentImages;
