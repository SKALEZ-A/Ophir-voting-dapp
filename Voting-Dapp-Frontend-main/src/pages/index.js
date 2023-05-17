import Navbar from "../../components/Navbar";
import Hero from "../../components/Hero-1";
import VoteForm from "../../components/VoteForm";
import Footer from "../../components/Footer";

export default function Home() {
	return (
		<>
			<Navbar />
			<div className="gradient-bg-welcome">
				<Hero />
				<VoteForm />
				<Footer />
			</div>
		</>
	);
}
