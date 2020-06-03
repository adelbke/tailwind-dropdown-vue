<template>
	<div
		class="dropdown-btn"
		@click="display=!display"
		@mouseover="onhover(true)"
		@mouseleave="onhover(false)"
	>
		<span :class="[btnClass]" v-text="btnText"></span>
		<div class="dropdown-menu" :class="[{'block':display, 'hidden':!display},menuClass]">
			<slot name="menu">
				<h2>hello</h2>
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
		}
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
.dropdown-menu {
	@apply absolute z-10 right-0;
}
.dropdown-btn {
	@apply relative inline-block;
}
</style>
