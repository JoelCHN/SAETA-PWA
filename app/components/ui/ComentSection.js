"use client";

import { useState, useEffect } from "react";
import CardComments from "./CardComments";

export default function ComentSection({ routeId, placeId }) {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState(""); // Estado para el nuevo comentario
  const [loadingFetch, setLoadingFetch] = useState(true);
  const [loadingPost, setLoadingPost] = useState(false); // Estado para el proceso de postear
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

  const handlePostComment = async () => {
    try {
      setLoadingPost(true);
      setError(null);

      let endpoint = "";

      if (routeId) {
        endpoint = `https://saeta-node-api.onrender.com/api/comments/routes`;
      } else if (placeId) {
        endpoint = `https://saeta-node-api.onrender.com/api/comments/places`;
      }

      let body = {
        ...(routeId
          ? { route_id: parseInt(routeId) }
          : { place_id: parseInt(placeId) }),
        user_name: "Anónimo",
        message: newComment,
        date: new Date().toISOString(),
      };

      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      };

      console.log(options);

      const response = await fetch(endpoint, options);

      if (!response.ok) {
        console.log(response);
        throw new Error(
          `Error al enviar el comentario: ${response.statusText}`
        );
      }

      const addedComment = await response.json();
      console.log(addedComment);

      // Actualiza la lista de comentarios localmente
      setComments((prevComments) => [...prevComments, addedComment]);
      setNewComment(""); // Limpia el campo de texto
    } catch (err) {
      setError(err.message);
    } finally {
      setLoadingPost(false);
    }
  };

  return (
    <section className="bg-white my-4 py-5 antialiased rounded-md shadow">
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
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              required
            ></textarea>
          </div>
          <button
            type="button"
            onClick={handlePostComment}
            disabled={loadingPost}
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none disabled:opacity-50"
          >
            {loadingPost ? "Publicando..." : "Comentar"}
          </button>
          {error && <p className="text-red-500">{error}</p>}
        </div>

        <div className="w-full h-auto max-h-80 overflow-hidden overflow-y-scroll">
          {loadingFetch ? (
            <p>Cargando comentarios...</p>
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
      </div>
    </section>
  );
}
