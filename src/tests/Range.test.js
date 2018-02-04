/**
 * @jest-environment node
 */

import Range from '../components/Main/Range'

describe("Range Operations", () => {

	const a = { name: 'A', min: 1, max: 10 }
	const b = { name: 'B', min: 10, max: 20 }
	const k = { name: 'K', min: 81, max: 81 }

	it('Add Operation should work correct', () => {
		expect(Range.add(a, b).min).toEqual(11)
		expect(Range.add(a, b).max).toEqual(30)
		expect(Range.add(a, k).min).toEqual(82)
		expect(Range.add(a, k).max).toEqual(91)
	})

	it('Substract Operation should work correct', () => {
		expect(Range.sub(a, b).min).toEqual(-19)
		expect(Range.sub(a, b).max).toEqual(0)
		expect(Range.sub(a, k).min).toEqual(-80)
		expect(Range.sub(a, k).max).toEqual(-71)
	})

	it('Mirror Operation should work correct', () => {
		expect(Range.mirror(a, b).min).toEqual(-10)
		expect(Range.mirror(a, b).max).toEqual(-1)
	})

	it('Multiply Operation should work correct', () => {
		expect(Range.mul(a, b).min).toEqual(10)
		expect(Range.mul(a, b).max).toEqual(200)
		expect(Range.mul(a, k).min).toEqual(81)
		expect(Range.mul(a, k).max).toEqual(810)
	})

	it('Divide Operation should work correct', () => {
		expect(Range.div(a, b).min).toEqual(0.05)
		expect(Range.div(a, b).max).toEqual(1)
		expect(Range.div(a, k).min).toEqual(1/81)
		expect(Range.div(a, k).max).toEqual(10/81)

		const c = { name: 'A', min: -5, max: 0 }
		expect(Range.div(a, c).min).toEqual(0)
		expect(Range.div(a, c).max).toEqual(0)
	})	
	
})