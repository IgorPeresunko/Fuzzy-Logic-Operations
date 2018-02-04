import React, { Component } from 'react'
import { withStyles } from 'material-ui/styles'
import Button from 'material-ui/Button'

import Intervals from '../Intervals'
import Operation from '../Operation'
import Canvas from '../Canvas'
import Range from './Range'

const defaultIntervals = [
	{
		name: 'A',
		min: 1,
		max: 10
	}, {
		name: 'B',
		min: 10,
		max: 20
	}, {
		name: 'C',
		min: 7,
		max: 10
	}
]

class Main extends Component {
	constructor(props) {
		super(props)

		this.operations = [
			'Add Range',
			'Add Number',
			'Substract Range',
			'Substract Number',
			'Multiply Range',
			'Multiply Number',
			'Divide Range',
			'Divide Range (hypotesys)',
			'Divide Number',
			'Mirror',
			'Inverse',
			'Max',
			'Min',
			'A (+) B (-) C'
		]

		this.state = {
			intervals: defaultIntervals,
			k: {
				name: 'K',
				min: 5,
				max: 5,
			},
			operation: this.operations[0],
			data: defaultIntervals
		}

		
	}

	countResult = () => {
		const { operation, intervals, k } = this.state
		
		const result = this.calc(intervals[0], intervals[1], intervals[2], k, operation, this.operations)
		
		const data = this.state.intervals.map(
			(i, index) => ({ x: [i.min, i.max], y: [index + 1, index + 1], name: i.name })
		).concat({ x: [k.min, k.max], y: [-1, -1], name: k.name })


		this.setState(prevState => ({
			data: [...data, { x: [result.min, result.max], y: [ 0, 0 ], name: result.name }]
		}))
	}

	calc = (a, b, c, num, operation, operations) => {
		// sry, mom
		switch(operation) {

			case operations[0]:
				return Range.add(a, b)

			case operations[1]:
				return Range.add(a, num)

			case operations[2]:
				return Range.sub(a, b)
			
			case operations[3]:
				return Range.sub(a, num)

			case operations[4]:
				return Range.mul(a, b)

			case operations[5]:
				return Range.mul(a, num)

			case operations[6]:
				return Range.div(a, b)
			
			case operations[7]:
				return Range.div2(a, b)

			case operations[8]:
				return Range.div(a, num)

			case operations[9]:
				return Range.mirror(a)

			case operations[10]:
				return Range.invert(a)

			case operations[11]:
				return Range.max(a, b)

			case operations[12]:
				return Range.min(a, b)
			
			case operations[13]:
				return Range.sub(Range.add(a, b), c)

			default:
				return { name: 'err', min: 0, max: 0 }
				
		}
	}

	onChangeOperation = e => {
		const operation = e.target.value
		this.setState({ operation })
	}
	
	onIntervalChange = (range, option) => e => {
		const value = Number(e.target.value)

		if (option) {
			this.setState(prevState => {
				const intervals = prevState.intervals.map(
					(int) => int.name === range ? { ...int, [option]: value } : int)

				return { intervals }
			})
		} else {
			this.setState({ k: { name: 'K', min: value, max: value } })
		}
	}

	render() {
		const { classes } = this.props
		const { intervals, operation, data, k } = this.state

		return (
			<div className={classes.root}>
				<div className={classes.control}>
					<Intervals items={intervals} k={k} onChange={this.onIntervalChange} />
					<Operation value={operation} operations={this.operations} onChange={this.onChangeOperation}/>

					<Button raised color="primary" onClick={this.countResult}>Count result</Button>
				</div>

				<Canvas data={data} />
			</div>
		)
	}
}

const styles = {
	root: {
		display: 'flex',
		flexDirection: 'row',
		width: '100%',
		justifyContent: 'center',
		alignItems: 'center'
	},
	control: {
		marginRight: '10px'
	},
	button: {
		margin: '10px',
	}
}

export default withStyles(styles)(Main)
