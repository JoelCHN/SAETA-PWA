export default async function Page({ params }) {
  const id = (await params).id
  const response = await fetch(
		`https://saeta-node-api.onrender.com/api/route/${id}`,
		{
			next: { revalidate: 60 },
		}
	);
	const routeDetails = await response.json();
  return (
    <>
      <section>
        <h1 className="text-4xl">Ruta {routeDetails.route_type} {routeDetails.short_name}</h1>
        <h2 className="text-2xl">{routeDetails.long_name}</h2>
        <span className="text-balance">Concesionario: {routeDetails.agency}</span>
        {routeDetails.status ? <span class="bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded border border-green-400">Activa</span> : <span class="bg-red-100 text-red-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded">Inactiva</span>}
      </section>
      <div className="mt-2 mb-2 border-b border-[#2e61c8] pb-2"></div>
      <section>
        <table>
          <thead>
            <th colSpan={2} className="text-center">Recorrido</th>
          </thead>
          <tbody>
            <tr>
              <td>
                <b>IDA:</b> <span>{routeDetails.terminal_1}</span>
              </td>
              <td>
                <b>VUELTA:</b> <span>{routeDetails.terminal_2}</span>
              </td>
            </tr>
          </tbody>
        </table>
      </section>
    </>
  );
}