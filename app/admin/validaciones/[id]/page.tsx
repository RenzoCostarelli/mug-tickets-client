import ValidatorsList from "@/app/components/admin-validators-list";
import Link from "next/link";

interface ValidacionesProps {
  id: string;
}

async function getAllValidators(eventId: string) {
  const res = await fetch(`${process.env.apiUrl}/token/query?eventId=${eventId}`, {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Failed to fetch data from events validators");
  }
  return res.json();
}

export default async function Validaciones({params} : {params: ValidacionesProps}) {
  const id = params.id;
  const {tokens} = await getAllValidators(id) || {};
  return (
    <div className={`admin-container`}>
      <Link href={'/admin'}>Volver</Link>
      <h1>Tokens de validación</h1>
      {tokens.length > 0 && (
        <ValidatorsList validatorsList={tokens} id={id} />
      )}
    </div>
  );
}
