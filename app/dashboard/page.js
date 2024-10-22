import Menu from "../components/ui/Menu";
import AsideMenu from "../components/ui/AsideMenu";
import Footer from "../components/ui/Footer";
import Image from "next/image";

export default function Dashboard() {
	return (
		<>
			<Menu />
			<AsideMenu />

			<div class="p-4 sm:ml-64">

            <Footer />
			</div>
		</>
	);
}
