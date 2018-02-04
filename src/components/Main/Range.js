const errRange = { name: 'err', min: 0, max: 0 }

const add = (a, b) => ({
	name: `${a.name} + ${b.name}`,
	min: a.min + b.min,
	max: a.max + b.max
})

const sub = (a, b) => ({
	name: `${a.name} - ${b.name}`,
	min: a.min - b.max,
	max: a.max - b.min
})

const mirror = a => ({
	name: a.name,
	min: -a.max,
	max: -a.min
})

const mul = (a, b) => {
	const mul = [ a.min * b.min, a.min * b.max, a.max * b.min, a.max * b.max ]

	return {
		name: `${a.name} * ${b.name}`,
		min: Math.min(...mul),
		max: Math.max(...mul)
	}
}

const div = (a, b) => {
	if (checkOnZero(b) || checkOnMinus(a) || checkOnMinus(b)) {
		return errRange
	}

	return {
		name: `${a.name} / ${b.name}`,
		min: a.min / b.max,
		max: a.max / b.min
	}
}

const div2 = (a, b) => {
	if (checkOnZero(b)) {
		return errRange
	}

	const div = [ a.min / b.min, a.min / b.max, a.max / b.min, a.max / b.max ]
	return {
		name: `${a.name} / ${b.name}`,
		min: Math.min(...div),
		max: Math.max(...div)
	}
}

const invert = a => {
	if (checkOnZero(a) || checkOnDifferentSigns(a)) {
		return errRange
	}

	return {
		name: `!${a.name}`,
		min: 1 / a.max,
		max: 1 / a.min
	}
}

const max = (a, b) => {
	const max = [Math.max(a.min, b.min), Math.max(a.max, b.max)]
	return {
		name: `Max ${a.name}, ${b.name}`,
		min: Math.min(...max),
		max: Math.max(...max)
	}
}

const min = (a, b) => {
	const min = [Math.min(a.min, b.min), Math.min(a.max, b.max)]
	return {
		name: `Min ${a.name}, ${b.name}`,
		min: Math.min(...min),
		max: Math.max(...min)
	}
}

const checkOnZero = a =>
	a.max === 0 || a.min === 0

const checkOnMinus = a =>
	a.min < 0 || a.max < 0

const checkOnDifferentSigns = a =>
	a.min * a.max < 0


const Range = {
	add,
	sub,
	mul,
	div,
	div2,
	mirror,
	invert,
	max, 
	min,
}

export default Range