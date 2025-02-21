import { Chip } from "@material-tailwind/react";

export function ChipVariants({ Value }) {
  return <Chip value={Value} color="blue" className="bg-indigo-800"/>;
}
