import Link from 'next/link';
import Image from 'next/image';

export default function Menu() {
return (
<nav className="fixed top-0 z-50 w-full bg-white border-b border-gray-200">
    <div className="px-3 py-3 lg:px-5 lg:pl-3">
        <div className="flex items-center justify-between">
            <div className="flex items-center justify-start rtl:justify-end">
                <button data-drawer-target="logo-sidebar" data-drawer-toggle="logo-sidebar" aria-controls="logo-sidebar"
                    type="button"
                    className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200">
                    <span className="sr-only">Open sidebar</span>
                    <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg">
                        <path clip-rule="evenodd" fill-rule="evenodd"
                            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z">
                        </path>
                    </svg>
                </button>
                <a href="/dashboard" className="flex ms-2 md:me-24">
                    <Image src="/icon512_rounded.png" alt="App logo" width={32} height={32} priority />
                    <span className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap">
                        SAETA
                    </span>
                </a>
            </div>
            <div className="flex items-center">
                <div className="flex items-center ms-3">
                    <div>
                        <button type="button"
                            className="flex text-sm text-gray-500 rounded-full focus:rin"
                            aria-expanded="false" data-dropdown-toggle="dropdown-user">
                            <span className="sr-only">
                                Open user menu
                            </span>
                            <svg className="w-8 h-8 "
                            xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
                                <path d="M12 10m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                                <path d="M6.168 18.849a4 4 0 0 1 3.832 -2.849h4a4 4 0 0 1 3.834 2.855" />
                            </svg>
                        </button>
                    </div>
                    <div className="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow"
                        id="dropdown-user">
                        <div className="px-4 py-3" role="none">
                            <p className="text-sm text-gray-900" role="none">
                                User Name
                            </p>
                            <p className="text-sm font-medium text-gray-900 truncate" role="none">
                                email@gmail.com
                            </p>
                        </div>
                        <ul className="py-1" role="none">
                            <li>
                                <a href="#"
                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                    role="menuitem">
                                    Settings
                                </a>
                            </li>
                            <li>
                                <a href="#"
                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                    role="menuitem">
                                    Sign out
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</nav>
);
}
