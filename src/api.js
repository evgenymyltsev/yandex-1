import { mapServerData } from './mappers';

export const loadList = () => {
	return fetch('/api/stations')
		.then(response => response.json())
		.then(mapServerData);
};

export const loadDetails = id =>
	fetch(`/api/stations/${id}`).then(response => response.json());
