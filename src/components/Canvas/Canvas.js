/* global Plotly:true */

import React, { Component } from 'react'
import pure from 'recompose/pure'

import createPlotlyComponent from 'react-plotly.js/factory'
const Plot = createPlotlyComponent(Plotly)

const config = {
	displayModeBar: false
}

const layout = {
	yaxis: {
		autorange: true,
		showgrid: false,
		zeroline: false,
		showline: false,
		autotick: true,
		ticks: '',
		showticklabels: false
	}
}

class Canvas extends Component {
	render() {
		const { data } = this.props

		return (
			<Plot
				data={data}
				layout={layout}
				config={config}
			/>
		)
	}
}

export default pure(Canvas)