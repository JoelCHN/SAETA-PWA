import Image from "next/image";

export default function ComentCard({ author, content, date }) {
  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <div className="flex items-center">
        <Image
          src={""}
          alt="Avatar"
          width={30}
          height={30}
          className="w-10 h-10 rounded-full"
        />
        <div className="ml-3">
          <h3 className="text-lg font-medium">{author}</h3>
          <p>{content ?? "No hay comentarios"}</p>
          <p className="text-sm text-gray-500">
            Publicado el {date ?? "Ahora"}
          </p>
        </div>
      </div>
    </div>
  );
}
