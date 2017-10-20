import { join } from 'path';
import * as express from 'express';

const clientPath = join(__dirname, '../client');

const app = express();

app.use(express.static(clientPath));

console.log(process.env.GREETING);
app.listen(3000, function () {
    console.log("I hear dis shit, sup 3000");
})