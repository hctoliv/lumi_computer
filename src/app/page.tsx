import Image from "next/image";
import { AiFillHdd } from "react-icons/ai";
import { AiFillPrinter } from "react-icons/ai";
import { AiFillCode } from "react-icons/ai";
import { AiOutlineLogin } from "react-icons/ai";
import { AiOutlineShopping } from "react-icons/ai";


const LumiLogo = require("../../public/logo_lumi.png");

export default function Home() {
  return (
    <main>
      <header className="flex flex-row justify-around bg-slate-900 mt-0 p-3">
        <div>
          <p>Olá, seja bem vindo!</p>
        </div>
        <div>
          <p>Atendimento ao cliente: (11) 2741-5642</p>
        </div>
        <div>
          <p>Email: vendas@lumilabor.com.br</p>
        </div>
        <div>
          <p>Rastrear minha compra</p>
        </div>
      </header>

      <header className="flex justify-around items-center bg-slate-800 mt-0 p-4">
        <div className="">
          <Image src={LumiLogo} width={250} height={250} alt="LumiLogo" />
        </div>

        <div>
          <input
            type="text"
            name=""
            id=""
            placeholder="O que você procura?"
            className="bg-slate-500 w-80 rounded-md p-3"
          />
        </div>

        <div className="flex flex-col items-center">
          <AiOutlineLogin />
          <h2>Minha conta</h2>

        </div>

        <div className="flex flex-col items-center">
        <AiOutlineShopping />

          <h2>Carrinho</h2>
        </div>
      </header>

      <main className="flex justify-around cursor-pointer mt-6">
        <div className="flex justify-around cursor-pointer flex-col items-center">
        <AiFillPrinter />

          Equipamentos
          </div>
        <div className="flex justify-around cursor-pointer flex-col items-center">
        <AiFillHdd />
          Hardwares
          </div>

        <div className="flex justify-around cursor-pointer flex-col items-center"> <AiFillCode />
Softwares</div>
        
      </main>

      <div className="h-48 w-screen bg-white mt-10">
<h1>ARTE VEM AQUI</h1>
      </div>

<div className="flex items-center justify-center mt-6">
  <h2 className="text-center h-6 w-6 bg-blue-400 rounded-full"></h2>
</div>
      <div className="flex flex-row justify-around mt-10">

        <div>Parcelamento em até 4x <br />vezes</div>
        <div>Frete Grátis</div>
        <div>Atendimento via Whatsapp</div>
        <div>Site Seguro</div>
      </div>
    </main>
  );
}
