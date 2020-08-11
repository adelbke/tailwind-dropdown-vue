<template>
	<div
		class="relative lg:inline-block cursor-pointer"
		@click="display=!display"
		@mouseover="onhover(true)"
		@mouseleave="onhover(false)"
	>
		<slot name="button"></slot>
		<div class="relative md:absolute z-10"
			:class="[{'block':display, 'hidden':!display},{'left-0':right && !left,'right-0':left},menuClass]">
			<slot name="menu">
			</slot>
		</div>
	</div>
</template>

<script>
export default {
	name: "TailwindDropdownVue",
	data: function() {
		return {
			display: false
		};
	},
	props: {
		menuClass: {
			type: String
		},
		hover: {
			type: Boolean,
			default: false
		},
		left: {
			type: Boolean,
			default:false
		},
		right: {
			type: Boolean,
			default:true
		},
	},
	methods: {
		onhover: function (value) {
			if(this.hover){
				this.display=value
			}
		},
	}
};
</script>

<style>
@tailwind base;

@tailwind components;

@tailwind utilities;
</style>
