const PackingThings = require('./packing-things')
const TravelPlan = require('./plan')
/* const Activity = require('./activity') */

class User {
	constructor(name, email) {
		this.name = name
		this.email = email
		this.plans = []
	}

	greet(user) {
		console.log(`Hello ${user.name},this is ${this.name}`)
	}

	createPlan(name, budget, startDate, endDate, scene, status, departurePoint, transportation) {
		const newPlan = new TravelPlan(name, budget, startDate, endDate, scene, status, departurePoint, transportation)
		this.plan.push(newPlan)
	}

	addPlan(plan) {
		plan.registerUser(this)
		this.plans.push(plan)
	}

	addPackingThings(plan, name, status) {
		const packingThings = new PackingThings(name, status, this)
		plan.packingThings.push(packingThings)
	}

	Comment(plan, text) {
		const comment = new Comment(text, this)
		plan.comment.push(comment)
	}
}
module.exports = User
