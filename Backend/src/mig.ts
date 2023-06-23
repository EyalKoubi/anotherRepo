import { MongoClient } from "mongodb";

const localDBUrl = "mongodb://127.0.0.1/myDB";
const atlasConnectionUrl =
  "mongodb+srv://eyal4845:Eyal4845@cluster0.ac6s6vf.mongodb.net/";

const migrateData = async () => {
  const localClient = await MongoClient.connect(localDBUrl);
  const atlasClient = await MongoClient.connect(atlasConnectionUrl);

  try {
    const localDB = localClient.db();
    const atlasDB = atlasClient.db();

    const localCollection = localDB.collection("quizs");
    const atlasCollection = atlasDB.collection("users");

    const documents = await localCollection.find({}).toArray();

    for (const document of documents) {
      await atlasCollection.insertOne(document);
    }

    console.log("Data migration complete");
  } catch (error) {
    console.error("Error migrating data:", error);
  } finally {
    localClient.close();
    atlasClient.close();
  }
};

// Call the migration function
migrateData();
