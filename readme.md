# Tailwind Dropdown Vue
an easy way to add dropdown buttons to your vue page

## Installation
---

```javascript
npm install tailwind-dropdown-vue

import TailwindDropdownVue from 'tailwind-dropdown-vue'
```

## Usage

```html
<dropdown
	menu-class=""
	hover
	left
	right
>
	<div slot="menu">
	<!-- In here you place the html that will be displayed in the dropdown menu -->
	</div>
</dropdown>
```
### Component Reference

* menu-class: the "menu" slot wrapper classes
* hover:the presence of this attribute changes the button's behavior to display the dropdown menu when hovering over the button
* left: align the dropdown menu to the left
* right: align the dropdown menu to the right