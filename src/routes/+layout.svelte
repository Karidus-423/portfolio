<script>
let opened_left = $state(true);
let opened_right = $state(true);
</script>

<div class="content">

<button class={["left-content",{opened_left}]}
		onclick={()=> opened_left = !opened_left}
		>
		<div class="navbar">
			<div class="nav-item">
				<a href="/">HOME</a>
			</div>
			<div class="nav-div"></div>
			<div class="nav-item">
				<a href="/projects">Projects</a>
			</div>
			<div class="nav-div"></div>
			<div class="nav-item">
				<a href="/resume">Resume</a>
			</div>
			<div class="nav-div"></div>
			<div class="nav-item">
				<a href="/blogs">Blogs</a>
			</div>
			<div class="nav-div"></div>
			<div class="nav-item">
				<a href="/contact">Contact</a>
			</div>
			<div class="nav-div"></div>
		</div>
</button>

<div class="center-content">
			<h1>CENTER</h1>
</div>

<button class={["right-content",{opened_right}]}
		onclick={()=> opened_right = !opened_right}
		>
			<h1>RIGHT</h1>
</button>

</div>

<style>


.content {
}

.left-content{
	background-color: #ff000055;
	backdrop-filter: blur(15px);
	height: 100%;
	z-index:1;
	width:5%;
	position:fixed;
	top: 0;
	left: 0;
	overflow-x:hidden;
    transition: width 0.5s cubic-bezier(0.03, 0.59, 0.08, 0.97);
}

.left-content * {  /* Hide all child elements */
    opacity: 0;
    pointer-events: none; 
}

.left-content.opened_left{
    transition: width 0.5s ease;
	width:20%;
	visibility: visible;
}

.left-content.opened_left * { 
    opacity: 1;
    transition: opacity 1.0s ease;
    pointer-events: auto; 
}

.navbar{
	display: flex;
	padding-bottom: 1em;
	flex-direction: column;
    align-items: center;
}

.nav-item{
	font-size: 3em;
	padding: 1em;
}

.nav-div{
	height: 0px;
	width: 50%;
	border: solid green 2px;
}

.center-content{
	position: absolute;
	background-color: gray;
	background-color: #cccccc55;
    top: 50%;
    left: 50%;
	height:100vh;
	width: 85vh;
    transform: translate(-50%, -50%);
	flex-direction: column; /* Stack items vertically */
    align-items: center;    /* Center horizontally */
    justify-content: center; /* Center vertically */
    text-align: center; /* Ensures text is centered */
}

.right-content{
	height: 100%;
	z-index:1;
	width:5%;
	position:fixed;
	top: 0;
	right: 0;
	overflow-x:hidden;
    transition: width 0.5s cubic-bezier(0.03, 0.59, 0.08, 0.97);
	background-color: #00ff0055;
	backdrop-filter: blur(15px);
}

.right-content * {  /* Hide all child elements */
    opacity: 0;
    pointer-events: none; 
}

.right-content.opened_right{
    transition: width 0.5s ease;
	width:20%;
	visibility: visible;
}

.right-content.opened_right * { 
    opacity: 1;
    transition: opacity 1.0s ease;
    pointer-events: auto; 
}


</style>
