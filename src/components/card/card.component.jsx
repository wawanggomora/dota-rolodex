import React from 'react';
import './card.styles.css';

export const Card = ({ hero }) => {
	const img = hero.name.replace('npc_dota_hero_', '');
	return (
		<div className="card-container">
			<img
				src={`https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/${img}.png`}
				alt={hero.localized_name}
			/>
			<h2>{hero.localized_name}</h2>
		</div>
	);
};
