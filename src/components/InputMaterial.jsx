import { Input } from "@material-tailwind/react";

export function InputSizes({ value, onChange }) {
  return (
    <div className="flex w-72 flex-col items-end gap-6">
      <Input
        size="lg"
        label="Digite seu CEP"
        value={value} // Agora o valor é controlado pelo estado de EnderecoPage
        onChange={onChange} // Atualiza o estado de EnderecoPage/ Classes do Tailwind para mudar a cor
      />
    </div>
  );
}
