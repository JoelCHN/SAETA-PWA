import fs from 'fs';
import path from 'path';

export async function POST(req) {
    try {
        const body = await req.json();
        const { routeId, comment } = body;

        const commentsFilePath = path.join(process.cwd(), 'public/data/Comments/Comments.json');
        const data = fs.readFileSync(commentsFilePath, 'utf8');
        let commentsData = JSON.parse(data);

        const newComment = {
            id: `${Date.now()}`,
            comment,
            date: new Date().toISOString(),
        };

        const route = commentsData.find((r) => r.routeId === routeId);
        if (route) {
            route.comments.push(newComment);
        } else {
            commentsData.push({ routeId, comments: [newComment] });
        }

        fs.writeFileSync(commentsFilePath, JSON.stringify(commentsData, null, 2), 'utf8');

        return new Response(JSON.stringify({ message: 'Comentario agregado correctamente' }), {
            status: 200,
        });
    } catch (err) {
        console.error(err);
        return new Response(JSON.stringify({ error: 'Error al guardar el comentario' }), {
            status: 500,
        });
    }
}
