"use client"; 

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../../../firebaseConfig';
import { useRouter } from 'next/navigation'; 
import { getDatabase, ref, get } from 'firebase/database';

export default function UserMenu() {
    const [user, setUser] = useState(null);
    const [userName, setUserName] = useState('');
    const router = useRouter();

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
            if (currentUser) {
                setUser(currentUser);
                const db = getDatabase();
                const userRef = ref(db, `users/${currentUser.uid}`);
                try {
                    const snapshot = await get(userRef);
                    if (snapshot.exists()) {
                        const userData = snapshot.val();
                        setUserName(userData.username || 'Usuario');
                    } else {
                        console.log('No user data found');
                    }
                } catch (error) {
                    console.error('Error fetching user data:', error);
                }
            } else {
                setUser(null);
            }
        });

    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      router.push('/');
    } catch (error) {
      console.error("Error al cerrar sesión:", error);
    }
  };
return (
   
    <div className="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow" id="dropdown-user">
        {user ? (
                <>
                    <div className="px-4 py-3" role="none">
                        <p className="text-sm text-gray-900" role="none">
                            {userName}
                        </p>
                        <p className="text-sm font-medium text-gray-900 truncate" role="none">
                            {user.email}
                        </p>
                    </div>
                    <ul className="py-1" role="none">
                        <li>
                            <button onClick={handleLogout} className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">
                                Cerrar Sesión
                            </button>
                        </li>
                    </ul>
                </>
            ) : (
                <div className="px-4 py-3" role="none">
                    <p className="text-sm text-gray-900" role="none">
                        <Link href="/login">
                            Iniciar sesión
                        </Link>
                    </p>
                </div>
            )}
    </div>
               
);
}