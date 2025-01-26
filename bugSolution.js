```javascript
// Correct usage of $inc operator with a numeric field
db.collection.updateOne({name: "John"}, {$inc: {age: 1}});
//Alternative to update the field value if it's not numeric
db.collection.updateOne({name: "John"}, {$set: {age: parseInt(age)+1}});
```