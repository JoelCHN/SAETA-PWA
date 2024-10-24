import Menu from "../components/ui/Menu";
import AsideMenu from "../components/ui/AsideMenu";
import Footer from "../components/ui/Footer";
import Image from "next/image";

export default function Dashboard() {
	return (
		<>
			<Menu />
			<AsideMenu />

			<div className="p-4 sm:ml-64">
				<div className="p-4 mt-14">

				</div>
            	<Footer />
			</div>
		</>
	);
}
