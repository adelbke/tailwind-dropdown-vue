<template>
	<div
		class="relative inline-block"
		@click="display=!display"
		@mouseover="onhover(true)"
		@mouseleave="onhover(false)"
	>
		<a v-if="to == ''" :href="href" :class="[btnClass]" v-text="btnText"></a>
		<router-link class="clue" v-else :to="to" :href="href" :class="[btnClass]" v-text="btnText"></router-link>
		<div class="absolute z-10 right-0" :class="[{'block':display, 'hidden':!display},menuClass]">
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
		btnClass: {
			type: String
		},
		btnText: {
			type: String,
			default:''
		},
		hover: {
			type: Boolean,
			default: false
		},
		href:String,
		to:{
			type:String,
			default:''
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
@tailwind base;

@tailwind components;

@tailwind utilities;
</style>
