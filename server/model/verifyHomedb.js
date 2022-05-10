const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({ productId: 'string', 
                productName: 'string', 
                price: 'string', 
                color:"string",
                inventory:"string"
                });

const Task = mongoose.model('todos', taskSchema);

module.exports = {
    Task
}