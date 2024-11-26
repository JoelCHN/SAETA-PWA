"use client";

import { useState, useEffect } from "react";
import CardComments from "./CardComments";

export default function ComentCard({ routeId, placeId }) {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");

  useEffect(() => {
    fetch("/data/Comments/Comments.json")
      .then((res) => res.json())
      .then((data) => {
        const route = data.find((r) => r.routeId === routeId);
        setComments(route ? route.comments : []);
      });
  }, [routeId]);

  const handleAddComment = async () => {
    if (newComment.trim()) {
      const commentData = { routeId, comment: newComment };
      try {
        const response = await fetch("/api/comments", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(commentData),
        });

        if (response.ok) {
          const newComments = [
            ...comments,
            { ...commentData, id: Date.now(), date: new Date().toISOString() },
          ];
          setComments(newComments);
          setNewComment("");
        }
      } catch (error) {
        console.error("Error al agregar el comentario:", error);
      }
    }
  };

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
            <label for="comment" className="sr-only">
              Your comment
            </label>
            <textarea
              id="comment"
              rows="6"
              className="px-0 w-full text-sm text-gray-900 border-0 focus:ring-0 focus:outline-none"
              placeholder="Escribe tu comentario..."
              required
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
            ></textarea>
          </div>
          <button
            type="button"
            onClick={handleAddComment}
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none"
          >
            Comentar
          </button>
        </div>
        {comments.length > 0 ? (
          comments.map((comment, index) => (
            <CardComments
              key={index}
              comment={comment.comment}
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
