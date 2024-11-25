import Image from "next/image";
import Link from "next/link";

export default function RoutesCard({
  id,
  agency,
  short_name,
  long_name,
  route_type,
  status,
  color,
}) {
  return (
    <li>
      <Link
        href={`cities_routes/${id}`}
        className="flex flex-col items-center justify-between bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-7xl h-1/2 hover:bg-gray-100 overflow-hidden"
      >
        <div className="flex flex-col md:flex-row w-full h-full">
          <Image
            src={
              agency === "ARVIT"
                ? "/agency/Arvit_Icon.png"
                : "/agency/Vicosertra_Icon.png"
            }
            width={400}
            height={400}
            alt={agency}
            className="object-contain aspect-[800/480] w-full rounded-t-lg md:h-auto md:w-1/4 md:rounded-none md:rounded-s-lg"
          />
          <div className="flex flex-col justify-between p-4 leading-normal">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
              RUTA {short_name}
            </h5>
            <h6 className="mb-3 text-xl font-semibold tracking-tight text-gray-800">
              {long_name}
            </h6>
            <p className="mb-3 font-normal text-gray-700">
              {route_type}{" "}
              {status ? (
                <span className="bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded border border-green-400">
                  Activa
                </span>
              ) : (
                <span className="bg-red-100 text-red-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded">
                  Inactiva
                </span>
              )}
            </p>
          </div>
        </div>
        <div
          className="w-80 h-full aspect-video skew-x-[-30deg] hidden md:block translate-x-10"
          style={{ backgroundColor: color }}
        ></div>
      </Link>
    </li>
  );
}
