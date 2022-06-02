import React, { useEffect } from "react";
import "./style.css";
import Icon from "../../atome/icon";

<svg
	xmlns='http://www.w3.org/2000/svg'
	className='h-6 w-6'
	fill='none'
	viewBox='0 0 24 24'
	stroke='currentColor'
	strokeWidth={2}
>
	<path
		strokeLinecap='round'
		strokeLinejoin='round'
		d='M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4'
	/>
</svg>;

const statData = [
	{
		path: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2",
		color: "#8c9095",
		category: "Tout les colis",
		number: "30",
		bgcolor: "#f0f0f1",
	},
	{
		path: "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z",
		color: "#847af1",
		category: "Colis crées",
		number: "10",
		bgcolor: "#eeedfd",
	},
	{
		path: "M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4",
		color: "#54deef",
		category: "Colis en stock",
		number: "6",
		bgcolor: "#e0f9fc",
	},
	{
		path: "M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0",
		color: "#34ca77",
		category: "Colis en cours de livraison",
		number: "4",
		bgcolor: "#e5f8ed",
	},
	{
		path: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
		color: "#ffa958",
		category: "Colis livrés",
		number: "2",
		bgcolor: "#fff3e8",
	},
	{
		path: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
		color: "#2ac770",
		category: "Colis livrés et payés",
		number: "5",
		bgcolor: "#e5f8ed",
	},
	{
		path: "M16 15v-1a4 4 0 00-4-4H8m0 0l3 3m-3-3l3-3m9 14V5a2 2 0 00-2-2H6a2 2 0 00-2 2v16l4-2 4 2 4-2 4 2z",
		color: "#ffa047",
		category: "Colis planifiér retour",
		number: "2",
		bgcolor: "#fff3e8",
	},
	{
		path: "M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4",
		color: "#ee8080",
		category: "Colis retournés",
		number: "1",
		bgcolor: "#fceaea",
	},
];

//<option value='ChoisirRole'>Choisir l'etat</option>
//<option value='En_stock'>En stock</option>
//<option value='En_cours_de_livraison'>En cours de livraison</option>
//<option value='Livrés'>Livrés</option>
//<option value='Livrés_et_payes'>Livrés et payes</option>
//<option value='Planifiés_retour'>Planifiés retour</option>
//<option value='Retournés'>Retournés</option>

const StatElement = ({ path, color, category, number, bgcolor }) => {
	return (
		<div className='statIconGroup flexStart'>
			<div
				className='statTypeIcon flex'
				style={{ backgroundColor: bgcolor }}
			>
				<Icon path={path} fill={color} />
			</div>
			<div className='flexColStart number_category'>
				<span className='number'>{number}</span>
				<span>{category}</span>
			</div>
		</div>
	);
};

const ColisStat = ({ data = [] }) => {
	useEffect(() => {});
	return (
		<div className='statistique flexColStart'>
			<div className='statLabel'>Statistique</div>
			<div className='stat'>
				{statData.map((ele, i) => (
					<StatElement
						key={i}
						path={ele.path}
						color={ele.color}
						category={ele.category}
						number={ele.number}
						bgcolor={ele.bgcolor}
					/>
				))}
			</div>
		</div>
	);
};

export default ColisStat;
