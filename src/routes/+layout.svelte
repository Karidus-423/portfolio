<script>
	import Navbar from '$lib/navbar.svelte';
	import Toolbar from '$lib/toolbar.svelte';
</script>


<div class="container">
	<!-- Top Layer -->
	<div class="layer top-layer">
		<div class="col">
			<Navbar />
		</div>
		<div class="col middle"></div>
		<div class="col">
			<Toolbar />
		</div>
	</div>

	<!-- Bottom Layer -->
	<div class="layer bottom-layer">
		<div class="col"></div>
		<div class="col middle">Middle</div>
		<div class="col"></div>
	</div>
</div>

<slot/>

<style>
/* Container to hold both layers */
.container {
	position: relative;
	width: 100%;
}

/* Common layer styles */
.layer {
	position: absolute;
	display: grid;
	width: 100%;
	height: 100%; /* Make sure both layers fully overlap */
	top: 0;
	left: 0;
}

/* Top Layer (Higher z-index) */
.top-layer {
	grid-template-columns: 25% 50% 25%; /* Middle = 50% */
	z-index: 2; /* Higher z-index to be above */
	background-color: rgba(255, 0, 0, 0.5); /* Semi-transparent red */
}

/* Bottom Layer (Lower z-index) */
.bottom-layer {
	grid-template-columns: 15% 70% 15%; /* Middle = 60% */
	z-index: 1; /* Lower z-index to be behind */
	background-color: rgba(0, 0, 255, 0.5); /* Semi-transparent blue */
}

/* Column styling */
.col {
	padding: 20px;
	text-align: center;
	color: white;
}

.bottom-layer .col.middle {
	/* Your styles here */
	background-color: red;
	height: 100vh;
}


</style>




