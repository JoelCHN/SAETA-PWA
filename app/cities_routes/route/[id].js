import { useRouter } from 'next/router';

export default function Route() {
    const router = useRouter();
    const { id } = router.query;

    return (
        <> 
            <h1>Ruta: {id}</h1> 
        </>
    );
}
