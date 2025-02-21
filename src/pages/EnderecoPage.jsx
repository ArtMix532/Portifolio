import { useState } from "react";
import { X } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { InputSizes } from "../components/InputMaterial";
import Title from "../components/Title";
import { Button } from "@material-tailwind/react";

function EnderecoPage() {
  const [cep, setCep] = useState(""); // Estado para armazenar o CEP digitado
  const [address, setAddress] = useState(null); // Estado para armazenar o endereço retornado
  const [error, setError] = useState(""); // Estado para mensagens de erro
  const navigate = useNavigate();

  const buscarEndereco = async () => {
    console.log(`Buscando endereço para o CEP: ${cep}`);

    try {
      const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
      console.log("Resposta da API:", response);

      if (!response.ok) {
        throw new Error(`Erro na requisição: ${response.status}`);
      }

      const data = await response.json();
      console.log("Dados retornados:", data);

      if (data.erro) {
        setAddress(null);
        setError("CEP não encontrado.");
      } else {
        setAddress(data);
        setError("");
      }

      // Limpar o input após a busca
      setCep(""); // Isso limpa o campo de input
    } catch (error) {
      console.error("Erro ao buscar o CEP:", error);
      setError(
        "Erro ao buscar o CEP. Verifique sua conexão ou tente novamente."
      );
    }
  };

  return (
    <div className="bg-slate-500 flex flex-col py-10 w-screen h-screen gap-8">
      <div className="px-4">
        <button onClick={() => navigate(-1)} className="bg-slate-200 p-2 rounded-md text-gray-900">
          <X />
        </button>
        <Title>API de Busca de Endereço</Title>
      </div>

      {/* Exibir os dados do endereço */}
      <div className="space-y-4 p-6 bg-slate-200 mx-auto rounded-md shadow w-1/4">
        {error ? (
          <h1 className="text-red-600">{error}</h1>
        ) : (
          <>
            <h1>
              <strong>Rua:</strong> {address?.logradouro || "Não encontrado"}
            </h1>
            <h1>
              <strong>Cidade:</strong> {address?.localidade || "Não encontrado"}
            </h1>
            <h1>
              <strong>Estado:</strong> {address?.uf || "Não encontrado"}
            </h1>
            <h1>
              <strong>País:</strong> Brasil
            </h1>
          </>
        )}
      </div>

      {/* Campo de entrada e botão para buscar o CEP */}
      <div className="space-y-4 p-6 bg-slate-200 mx-auto rounded-md shadow w-1/4">
        <h1>Digite o seu CEP</h1>
        <InputSizes
          value={cep}
          onChange={(e) => setCep(e.target.value)} // Agora o Input controla o estado do CEP
        />
        <Button onClick={buscarEndereco}>Buscar Endereço</Button>
      </div>
    </div>
  );
}

export default EnderecoPage;
