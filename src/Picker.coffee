class exports.Picker extends Layer
	constructor: (@options={}) ->

		@options.width ?= Screen.width
		@options.backgroundColor ?= "#FFF"
		@options.startOnRow ?= 0
		@options.tintColor ?= "#0076FF"
		@options.data ?= [["Option 1A", "Option 1B", "Option 1C", "Option 1D", "Option 1E"], ["Option 2A", "Option 2B", "Option 2C", "Option 2D", "Option 2E"]]

		super _.defaults @options,

		width: @options.width
		height: 144
		name: "picker"

		# Variables
		tintColor = @options.tintColor
		@drum = []

		# Containers
		for i in [0...@options.data.length]
			@container = new Layer
				name: "drumContainer"
				parent: @
				height: @height
				width: @width / @options.data.length
				x: i * @width / @options.data.length
				backgroundColor: null
				clip: true

			# Drums
			@pickerDrum = new PageComponent
				parent: @container
				name: "drum"
				height: 48
				width: @container.width - 16
				point: Align.center
				scrollHorizontal: false
				clip: false
			@pickerDrum.style = {borderTop: "1px solid #{tintColor}", borderBottom: "1px solid #{tintColor}"}

			@drum.push(@pickerDrum)

			# Rows
			for j in [0...@options.data[i].length]
				row = new Layer
					parent: @pickerDrum.content
					height: 48
					name: "pickerRow#{j}"
					backgroundColor: null
					width: @pickerDrum.width
					y: j * 48
					html: @options.data[i][j]
				row.style = {fontSize: "16px", textAlign: "center", paddingTop: "10px", fontFamily: "Roboto", fontWeight: 400, color: "#333" }

			for drum, d in @drum
				if @options.startOnRow != 0
					drum.snapToPage(drum.content.children[@options.startOnRow], false)


		# Scrim
		@scrimTop = new Layer
			name: "topScrim"
			parent: @
			height: @height / 2 - 24
			width: @width
			backgroundColor: "rgba(255, 255, 255, .70)"
		@scrimBottom = new Layer
			name: "bottomScrim"
			parent: @
			height: @height / 2 - 24
			y: Align.bottom
			width: @width
			backgroundColor: "rgba(255, 255, 255, .70)"


	@define 'tintColor',
		get: ->
		   @options.tintColor
		set: (value) ->
		   @options.tintColor = value
