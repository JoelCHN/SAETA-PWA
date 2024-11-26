'use client';

import { useState, useEffect } from 'react';
import Image from "next/image";

export default function ComentCard({ routeId }) {
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState('');

    
    useEffect(() => {
        fetch('/data/Comments/Comments.json')
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
                const response = await fetch('/api/comments', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(commentData),
                });

                if (response.ok) {
                    const newComments = [...comments, { ...commentData, id: Date.now(), date: new Date().toISOString() }];
                    setComments(newComments);
                    setNewComment('');
                }
            } catch (error) {
                console.error('Error al agregar el comentario:', error);
            }
        }
    };

    return (
        <div>
            <div className="container mx-auto mt-4 p-4 shadow">
              <h3 className="text-lg font-semibold mb-4">Comentarios</h3>

              <div className="overflow-y-scroll  overflow-y-auto max-h-60 mb-4"> 
                {comments.length > 0 ? (
                  comments.map((comment, index) => (
                    <div key={index} className="mb-4 p-4 bg-gray-50 rounded-lg shadow-sm">
                      <p className="text-sm text-gray-700">{comment.comment ?? "No hay comentarios"}</p>
                      <p className="pt-2 text-[0.6rem] text-gray-500 mt-2 text-right ">
                        Publicado el {new Date(comment.date).toLocaleString()}
                      </p>
                    </div>
                  ))
                ) : (
                  <div className="text-sm text-gray-500 text-center py-4">
                    No hay comentarios disponibles.
                  </div>
                )}
              </div>
            

            <div className="bg-white p-4 m-4 rounded-lg shadow">
                <textarea
                  value={newComment}
                  onChange={(e) => setNewComment(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded"
                  placeholder="Escribe tu comentario"
                ></textarea>
                <button
                  onClick={handleAddComment}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2"
                >
                  Publicar
                </button>
            </div>
        </div>
        </div>

    );
}
