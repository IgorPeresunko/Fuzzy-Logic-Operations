import React from 'react'
import PropTypes from 'prop-types'
import withStyles from 'material-ui/styles/withStyles'
import TextField from 'material-ui/TextField'
import Paper from 'material-ui/Paper'
import Typography from 'material-ui/Typography'
import pure from 'recompose/pure'


const propTypes = {
	classes: PropTypes.object.isRequired,
	items: PropTypes.array.isRequired
}

const Intervals = ({
	classes,
	items,
	k,
	onChange
}) => (
	<Paper className={classes.container}>
		{
			items.map((item, i) => <div key={item.name} className={classes.intBlock}>
				<Typography type="title" className={classes.title}>Interval {item.name}: </Typography>
				<TextField
					id="min1"
					label="Min"
					value={item.min}
					onChange={onChange(item.name, 'min')}
					type="number"
					className={classes.textField}
					InputLabelProps={{
						shrink: true,
					}}
				/>
				<TextField
					id="max1"
					label="Max"
					value={item.max}
					onChange={onChange(item.name, 'max')}
					type="number"
					className={classes.textField}
					InputLabelProps={{
						shrink: true,
					}}
				/>
			</div>)
		}
		<div className={classes.intBlock}>
			<Typography type="title" className={classes.title}>Number K: </Typography>
			<TextField
				id="k"
				label="Num"
				value={k.min}
				onChange={onChange('k')}
				type="number"
				className={classes.textField}
				InputLabelProps={{
					shrink: true,
				}}
			/>
		</div>
	</Paper>
)

Intervals.propTypes = propTypes

const styles = theme => ({
	container: {
		display: 'flex',
		flexDirection: 'column',
		padding: '10px 0'
	},
	intBlock: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'flex-end',
		padding: '10px'
	},
	title: {
		marginBottom: '4px'
	},
	textField: {
		width: '40px',
		marginLeft: '20px'
	}
})

export default pure(withStyles(styles)(Intervals))