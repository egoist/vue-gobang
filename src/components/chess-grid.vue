<template>
	<div class="chess-grid">
		<div class="chess-box"
			v-for="box in boxes"
			@click="chooseBox($index)"
			track-by="$index">
			<circle v-if="box.filled"></circle>
		</div>
	</div>
</template>

<script>
	function fillArray(item, length) {
		let i = 0
		let res = []
		while(i < length) {
			res[i] = JSON.parse(JSON.stringify(item))
			i++
		}
		return res
	}

	const boxes = fillArray({
		filled: false
	}, 15 * 15)

	export default {
		data() {
			return {
				boxes
			}
		},
		methods: {
			chooseBox(index) {
				this.boxes = this.boxes.map((box, boxIndex) => {
					console.log(index, boxIndex)
					if (index === boxIndex) {
						box.filled = true
					}
					return box
				})
			}
		},
		components: {
			circle: require('./circle')
		}
	}
</script>
