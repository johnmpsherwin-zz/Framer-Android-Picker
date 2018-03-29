![](header-image.png)

## Installation
To install, place the `Picker.coffee` file in the `/modules` folder in your Framer project.

## Usage
In Framer Studio, write:
```javascript
{ Picker } = require "Picker"
```

Next, instantiate the picker with the following code:
```javascript
myPicker = new Picker
```

By default the picker has two drums which can be accessed by dot notation:
```javascript
myPicker.drum[0]
myPicker.drum[1]
```

This can be used to get the value of the currently selected row in each drum:
```javascript
myPicker.drum[0].on "change:currentPage", ->
	print @currentPage.html
```

To add your own data to the picker, you'll need to pass it some nested arrays. Here's an example of how you'd set up a date picker with days, months and years:
```javascript
data = [
	["1", "2", "3", "4", "5", "6", "7", "8"],
	["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"],
	["2013", "2014", "2015", "2016", "2017", "2018", "2019", "2020"]
]

myPicker = new Picker
	data: data
```

The number of drums in the picker is set by the amount of nested array's it's passed, so to remove a drum, you just need to remove one of the nested array's in your data.

The drum's can be animated too. Here's an example:
```javascript
animatedDrum = myPicker.drum[0]
animatedDrum.snapToPage(animatedDrum.content.children[2])
```

This will animate the first drum to its 3rd row.

There's also a number of custom options available to let you style and set up the picker for your needs:

| Property | Default Value | Type
| ------------- | ------------- | ------------- |
| width | Screen.width | Number |
| backgroundColor | "#FFF" | String |
| startOnRow | 0 | Number |
| tintColor | "#0076FF" | String |
| data | Array | Array |

If there's any more custom options you need, feel free to contact me and I'll add them.

## Contact
Say Hi, I’m on <a href="https://twitter.com/johnmpsherwin">Twitter 👋</a>.

Follow me on <a href="https://dribbble.com/johnsherwin">Dribbble 🏀</a>.
