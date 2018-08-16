export const mapServerData = serverData => ({
	type: 'FeatureCollection',
	features: serverData.map((obj, index) => ({
		id: index,
		type: 'Feature',
		isActive: obj.isActive,
		geometry: {
			type: 'Point',
			coordinates: [obj.lat, obj.long]
		},
		properties: {
			iconCaption: obj.serialNumber
		},
		options: {
			preset: getObjectPreset(obj)
		}
	}))
});

const getObjectPreset = obj =>
	obj.isActive
		? 'islands#blueCircleDotIconWithCaption'
		: 'islands#redCircleDotIconWithCaption';
