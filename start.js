if ('serviceWorker' in navigator) {
	navigator.serviceWorker.register('service_worker.js').then(async (registration) => {
		console.log('ServiceWorker registration successful with scope: ', registration.scope);
	}).catch((err) => {
		console.log('ServiceWorker registration failed: ', err);
	});
}