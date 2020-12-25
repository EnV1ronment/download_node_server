import app from './app';

// Start the server
const port = Number(process.env.PORT || 8081);
app.listen(port, () => {
	console.log(`
	Express server started in ${app.get('env')} on port: ${port}
	
	press Ctrl-C to terminate
	`);
});
