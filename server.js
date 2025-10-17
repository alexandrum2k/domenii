import express from 'express';

const app = express();

app.get('/system/health', (req, res)=>
{
	res.json(
	{
		status: 'ok',
		ts: Date.now(),
	}
	);
});

const port = process.env.PORT || 8080;
app.listen(port, ()=>console.log('listening_on_port_'+port));
