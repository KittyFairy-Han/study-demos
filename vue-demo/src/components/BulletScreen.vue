<template>
	<transition-group class="base-bullet-screen" tag="ul" name="list">
		<li class="base-bullet-item" v-for="item in activeList" :key="item[id]">
			<slot :item="item"> </slot>
		</li>
	</transition-group>
</template>

<script>
export default {
	model: {
		prop: 'nextIndex',
		event: 'indexChange', // 即将显示的那条弹幕在总列表 list 中的位置
	},
	props: {
		nextIndex: {
			type: Number,
			default: 0,
		},
		// 弹幕数据
		list: {
			type: Array,
			default: () => [],
		},
		// 每一条弹幕的唯一值属性名
		id: {
			type: String,
			default: 'id',
		},
		// 弹幕一屏显示的数量
		maxActNum: {
			type: Number,
			default: 3,
		},
		// 弹幕更新的时间间隔
		speed: {
			type: Number,
			default: 2000, // 单位是毫秒
		},
		// 是否循环播放
		isLoop: {
			type: Boolean,
			default: true,
		},
	},
	data() {
		return {
			activeList: [], // 当前显示的列表
		}
	},
	computed: {},
	watch: {

	},
	methods: {
		init() {
			this.next()
			this.bsTimer = setInterval(this.next, this.speed)
		},
		next() {
			let next = this.nextIndex
			if (next > this.list.length) {
				console.warn('nextIndex > list.length')
				return
			} else if (next == this.list.length) {
				if (this.isLoop) {
					this.playNext(0)
					this.$emit('indexChange', 1)
				} else {
					clearInterval(this.bsTimer)
					this.activeList.splice(0, this.activeList.length) //清空现在正在显示的弹幕
					this.$emit('endPlay')
				}
				return
			} else {
				this.playNext(next)
				this.$emit('indexChange', next + 1)
			}
		},
		playNext(next) {
			const nextItem = this.list[next]
			this.activeList.push(nextItem)
			if (this.activeList.length > this.maxActNum) {
				this.activeList.shift()
			}
		},
	},

	beforeDestroy() {
		this.bsTimer && clearInterval(this.bsTimer)
	},
}
</script>

<style lang="less"  scoped>
.base-bullet-screen {
	.base-bullet-item {
		display: block;
		transition: all 1s;
		// position: absolute;
	}
	.list-enter-active {
		position: absolute;
	}
	.list-leave-active {
		position: absolute;
	}
	.list-enter {
		opacity: 0.5;
		transform: translateX(-100%);
	}
	.list-leave-to {
		transform: translateY(-100%);
		opacity: 0;
	}
	.list-move {
		transition: all 1s;
	}
}
</style>
