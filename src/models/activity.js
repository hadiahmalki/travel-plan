class Activity {
	constructor(name, time, location) {
		this.name = name
		this.time = time
		this.location = location
	}
}

const ActivitiesName = {
	Name: 'name',
}
const ActivitiesTime = {
	Time: 'time',
}
const ActivitiesLocation = {
	location: 'location',
}

module.exports = {
	Activity,
	ActivitiesName,
	ActivitiesTime,
	ActivitiesLocation,
}
