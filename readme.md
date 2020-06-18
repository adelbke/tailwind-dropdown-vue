# Tailwind Dropdown Vue
an easy way to add dropdown buttons to your vue page

## Installation
---

```
npm install tailwind-dropdown-vue

import TailwindDropdownVue from 'tailwind-dropdown-vue'

```

## Usage

```
<dropdown
	btn-text=""
	btn-class=""
	menu-class=""
	to=""
	href
	hover
>
	<div slot="menu">
	<!-- In here you place the html that will be displayed in the dropdown menu -->
	</div>
</dropdown>
```
### Component Reference

* btn-text: contains the button's text
* btn-class: contains the button's class
* menu-class: the "menu" slot wrapper classes
* to: the vue-router link that the dropdown button leads to (*this will only work with the hover attribute*)

* href: an alternative to the "to" attribute if the link isn't a vue-router link
* hover:the presence of this attribute changes the button's behavior to display the dropdown menu when hovering over the button
