<template>
	<a
		class="relative inline-block"
		@click="display=!display"
		@mouseover="onhover(true)"
		@mouseleave="onhover(false)"
		:href="href"
	>
		<span :class="[btnClass]" v-text="btnText"></span>
		<div class="absolute z-10 right-0" :class="[{'block':display, 'hidden':!display},menuClass]">
			<slot name="menu">
				<h2>hello</h2>
			</slot>
		</div>
	</a>
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
		btnClass: {
			type: String
		},
		btnText: {
			type: String,
			default:"testing text"
		},
		hover: {
			type: Boolean,
			default: false
		},
		href:String
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
</style>
