"use client";

import { useState, useEffect } from "react";
import CardComments from "./CardComments";

export default function ComentSection({ routeId, placeId }) {
  const [comments, setComments] = useState([]);
  const [loadingFetch, setLoadingFetch] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchComments = async () => {
      try {
        setLoadingFetch(true);
        let endpoint = "";

        if (routeId) {
          endpoint = `https://saeta-node-api.onrender.com/api/comments/routes/${routeId}`;
        } else if (placeId) {
          endpoint = `https://saeta-node-api.onrender.com/api/comments/places/${placeId}`;
        } else {
          throw new Error("No routeId or placeId provided.");
        }

        const response = await fetch(endpoint);
        if (!response.ok) {
          throw new Error(`Error fetching comments: ${response.statusText}`);
        }

        const data = await response.json();
        setComments(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoadingFetch(false);
      }
    };

    fetchComments();
  }, [routeId, placeId]);

  return (
    <section className="bg-white py-8 lg:py-16 antialiased">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg lg:text-2xl font-bold text-gray-900">
            Comentarios ({comments.length})
          </h2>
        </div>

        <div className="mb-6">
          <div className="py-2 px-4 mb-4 bg-white rounded-lg rounded-t-lg border border-gray-200">
            <label htmlFor="comment" className="sr-only">
              Your comment
            </label>
            <textarea
              id="comment"
              rows="6"
              className="px-0 w-full text-sm text-gray-900 border-0 focus:ring-0 focus:outline-none"
              placeholder="Escribe tu comentario..."
              required
            ></textarea>
          </div>
          <button
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none disabled:opacity-50"
          >
            Comentar
          </button>
        </div>

        {loadingFetch ? (
          <p>Cargando comentarios...</p>
        ) : error ? (
          <p className="text-red-500">{error}</p>
        ) : comments.length > 0 ? (
          comments.map((comment, index) => (
            <CardComments
              key={index}
              userName={comment.user_name}
              comment={comment.message}
              datePosted={comment.date}
            />
          ))
        ) : (
          <div className="text-sm text-gray-500 text-center py-4">
            No hay comentarios disponibles.
          </div>
        )}
      </div>
    </section>
  );
}
