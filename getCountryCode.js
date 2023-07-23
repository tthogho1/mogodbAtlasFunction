exports = async function(arg){
  // This default function will get a value and find a document in MongoDB
  // To see plenty more examples of what you can do with functions see: 
  // https://www.mongodb.com/docs/atlas/app-services/functions/

  // Find the name of the MongoDB service you want to use (see "Linked Data Sources" tab)
  var serviceName = "mongodb-atlas";

  // Update these to reflect your db/collection
  var dbName = "webcam"
  var collName = "webcam";

  // Get a collection from the context
  var collection = context.services.get(serviceName).db(dbName).collection(collName);

//const query = { "id": { "$eq":"1010004899"}};
//const projection = {"location.country":1,"location.country_code":1,"_id":0 };

return collection.distinct("location.country_code", {})
  .then(results => {
      console.log(JSON.stringify(results));
      console.log(results.length);
      return results;
  })
  .catch(err => console.error(err))
};