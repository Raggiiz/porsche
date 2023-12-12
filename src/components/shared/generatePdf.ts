import jsPDF from "jspdf";
import Logo from "../../assets/porscha-logo-white.png";
import html2canvas from "html2canvas";
import { carPrice } from "../configurator/carConfigs";
import { CarConfigs } from "../configurator/interfaces";
import { getPurchaseCode } from "./utils";

export const downloadSummary = (configs: CarConfigs) => {
  const input: HTMLElement | null = document.getElementById("print"); // Pega o elemento summary
  if (input)
    html2canvas(input) // transforma em um canvas (desenho)
      .then((canvas) => {
        const imgData: string = canvas.toDataURL("image/png"); // transforma o desenho em uma imagem em png
        const pdf = new jsPDF({ unit: "px", format: [180, 490] }); // Inicia o PDF com unidade em px e tamanho definido
        pdf.setFillColor("#161616");
        pdf.rect(0, 0, 10000, 10000, "F"); // Cria um quadrado preenchido
        pdf.addImage(Logo, 60, 20, 60, 0);
        pdf.setTextColor("#fff");
        pdf.setFont("SpaceGrotesk");
        pdf.setFontSize(12);
        pdf.text("911 GT2", 73, 70);
        pdf.setFont("Inter-Bold", "bold");
        pdf.setFontSize(10);
        pdf.text("PURCHASE CODE", 60, 450);
        pdf.addImage(imgData, 28, 95, 124, 317);
        pdf.setTextColor("#E2B558");
        pdf.setFontSize(10);
        pdf.text(getPurchaseCode(configs),35,460);
        pdf.save(`911-gt2-${new Date().toDateString().replaceAll(" ", "-")}.pdf`);
      });
};

export const generateInvoice = (
  fullName: string,
  street: string,
  number: string,
  city: string,
  state: string,
  zipCode: string,
  configsPrice: number
) => {
  const pdf = new jsPDF({ unit: "px" });
  pdf.setFillColor("#1c1c1c");
  pdf.rect(0, 0, 10000, 10000, "F");
  pdf.addImage(Logo, 50, 40, 60, 0);
  pdf.setTextColor("#fff");
  pdf.setFont("SpaceGrotesk-Bold", "bold");
  pdf.setFontSize(42);
  pdf.text("INVOICE", 396, 70, { align: "right" });
  pdf.setFontSize(18);
  pdf.setTextColor("#fff");
  pdf.text("BILLING TO", 50, 140);
  pdf.setFont("Inter-Regular", "normal");
  pdf.setFontSize(14);
  pdf.setTextColor("#7d7d7d");
  pdf.text(fullName, 50, 165);
  pdf.text(`${number} ${street}`, 50, 180);
  pdf.text(`${city}, ${state}, ${zipCode}`, 50, 195);
  pdf.setFont("SpaceGrotesk-Bold", "bold");
  pdf.setFontSize(18);
  pdf.setTextColor("#fff");
  pdf.text("PAYMENT INFORMATION", 50, 430);
  pdf.setFont("Inter-Regular", "normal");
  pdf.setFontSize(14);
  pdf.setTextColor("#7d7d7d");
  pdf.text("Porcha bank", 50, 455);
  pdf.text(`1290389283-3`, 50, 470);
  pdf.text(`Payment due within 30 days`, 50, 485);
  pdf.setFillColor("#fff");
  pdf.rect(50, 250, 345, 0.5, "F");
  pdf.setFont("SpaceGrotesk-Bold", "bold");
  pdf.setFontSize(16);
  pdf.setTextColor("#fff");
  pdf.text("Description", 50, 270);
  pdf.text("Price", 396, 270, { align: "right" });
  pdf.setFillColor("#7d7d7d");
  pdf.rect(50, 282, 345, 0.5, "F");
  pdf.setFont("Inter-Regular", "normal");
  pdf.setFontSize(14);
  pdf.setTextColor("#7d7d7d");
  pdf.text("Porscha 911 GT2", 50, 300);
  pdf.text(
    `$ ${carPrice.toLocaleString("en-us", { minimumFractionDigits: 2 })}`,
    396,
    300,
    { align: "right" }
  );
  pdf.text("Configurations", 50, 320);
  pdf.text(
    `$ ${configsPrice.toLocaleString("en-us", { minimumFractionDigits: 2 })}`,
    396,
    320,
    { align: "right" }
  );
  pdf.rect(50, 330, 345, 0.5, "F");
  pdf.setFont("SpaceGrotesk-Bold", "bold");
  pdf.setFontSize(16);
  pdf.setTextColor("#fff");
  pdf.text("Total", 50, 350);
  pdf.text(
    `$ ${(configsPrice + carPrice).toLocaleString("en-us", {
      minimumFractionDigits: 2,
    })}`,
    396,
    350,
    { align: "right" }
  );
  pdf.setFillColor("#fff");
  pdf.rect(50, 362, 345, 0.5, "F");
  pdf.setFont("Inter-Regular", "normal");
  pdf.setFontSize(14);
  pdf.setTextColor("#7d7d7d");
  pdf.text(
    `Invoice nº ${Math.floor(
      1000 + Math.random() * 9000
    )}. Generated on ${new Date().toLocaleDateString("en-us", {
      weekday: "short",
    })}, ${new Date().getDate()} ${new Date().toLocaleString("en-us", {
      month: "short",
    })} ${new Date().getFullYear()}`,
    50,
    595
  );
  pdf.save(`911-gt2-${fullName.replaceAll(" ", "-")}.pdf`);
};
