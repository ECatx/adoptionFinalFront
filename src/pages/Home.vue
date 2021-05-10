<template>
	<section class="bg-gray-600 container mx-auto text-white shadow-xl mt-28 flex-col">
		<div class=" container mx-auto flex flex-col items-center px-4 py-16 text-center justify-center">
            <img src="../assets/background.jpg" class="mb-5"/>
			<h1 class="text-base-content text-4xl text- font-bold leading-none sm:text-5xl">Welcome to our fictional adoption site for cats
			</h1>
			<p class="text-base-content px-8 mt-8 mb-12 text-3xl">Here you can find many different cats who are avalible!<br>Help a cat find a forever home</p>
			<div class="flex flex-wrap justify-center">
				<router-link to="/adoptions" class="px-8 py-3 m-2 bg-purple-500 text-lg font-semibold rounded-full dark:bg-violet-400 dark:text-coolGray-900 hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-purple-400">Adoptions</router-link>
			</div>
		</div>
	</section>
</template>