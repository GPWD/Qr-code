import { Link } from "react-router-dom";
const Navigation = () => {
	return (
		<nav>
			<Link to="/generate">Генерировать QR код</Link>
			<Link to="/scan">Сканировать QR код</Link>
			<Link to="/generateHistory">История генерации</Link>
			<Link to="/scanHistory">Истоория скагирования</Link>
		</nav>
	);
}

export default Navigation;