export default function CardComments({ userName, datePosted, comment }) {
  return (
    <>
      <article className="p-6 mb-3 text-base bg-white">
        <footer className="flex justify-between items-center mb-2">
          <div className="flex items-center">
            <p className="inline-flex items-center mr-3 text-sm text-gray-900 font-semibold">
              <picture className="w-6 h-6 aspect-square rounded-full bg-blue-600 me-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-white"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
                  <path d="M12 10m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                  <path d="M6.168 18.849a4 4 0 0 1 3.832 -2.849h4a4 4 0 0 1 3.834 2.855" />
                </svg>
              </picture>
              {userName}
            </p>
            <p className="text-sm text-gray-600">
              Publicado el {new Date(datePosted).toLocaleString()}
            </p>
          </div>
        </footer>
        <p className="text-gray-500">{comment}</p>
      </article>
      <div className="mx-6 border-b border-gray-200"></div>
    </>
  );
}
