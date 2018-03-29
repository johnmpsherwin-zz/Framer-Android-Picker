resetBtn = undefined



{ Picker } = require "Picker"

data = [
	["1", "2", "3", "4", "5", "6", "7", "8"], 
	["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"], 
	["2013", "2014", "2015", "2016", "2017", "2018", "2019", "2020"]
]

myPicker = new Picker
	data: data
	tintColor: "#613CFF"
	width: 300
	point: Align.center
	startOnRow: 3

drums = []
drums.push(
	myPicker.drum[0]
	myPicker.drum[1]
	myPicker.drum[2]
)

for drum, i in drums
	drum.on "change:currentPage", ->
		setDate()

# Date
date = new TextLayer
	text: "{Day}{Month}{Year}"
	font: "300 32px/1 Roboto"
	textAlign: "center"
	color: "#333"
	x: Align.center
	y: 100
	width: Screen.width

setDate = ->
	date.template =
		Day: "0" + myPicker.drum[0].currentPage.html
		Month: " " + myPicker.drum[1].currentPage.html
		Year: " " + myPicker.drum[2].currentPage.html
		
	# Button
	resetBtn = new TextLayer
		text: "Reset Date"
		textAlign: "center"
		height: 40
		width: 140
		backgroundColor: myPicker.tintColor
		borderRadius: 5
		font: "400 16px/1 Roboto"
		color: "#FFF"
		x: Align.center
		y: 390
	resetBtn.style = {paddingTop: "12px", paddingLeft: "24px", paddingRight: "24px"}

setDate()


resetBtn.onTap ->
	for drum, i in drums
		drum.snapToPage(drum.content.children[3])

