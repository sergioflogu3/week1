const mongoose = require('mongoose');
const app = require("./app");
const port = process.env.PORT;

mongoose.connect(process.env.DATABASE, {}).then((con) => {
    console.log('Connected to mongo');
    // const p = new Product({
    //     productName: 'product 1',
    //     price: 10
    // });
    // p.save().then(() =>{
    //     console.log('saved');
    // });
});

app.listen(port, () => {
    console.log(`App running on port ${port}`);
});
