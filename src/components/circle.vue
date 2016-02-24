<style>
	$size: 40px;
	.circle {
		width: $size;
		height: $size;
		border-radius: 50%;
		margin: 5px;
		border: 1px solid #f0f0f0;
		box-shadow: 2px 1px 1px #ccc;
		background: -webkit-gradient(linear, left top, left bottom, from(#fff), to(#eee));
	}
</style>

<template>
	<div
		class="circle"
		:style="{backgroundColor: this.type || 'white'}">
	</div>
</template>

<script>
	export default {
		props: ['type']
	}
</script>
