#!/bin/bash
# Attendre que Mongo soit prêt
echo "Waiting for mongo..."

sleep 5

# Import des fichiers JSON (nommés .bson) dans la base media_library
mongoimport --host mongo --db media_library --collection directors --file /data_to_import/directors.bson --mode upsert --upsertFields _id
mongoimport --host mongo --db media_library --collection movies --file /data_to_import/movies.bson --mode upsert --upsertFields _id
mongoimport --host mongo --db media_library --collection reviews --file /data_to_import/reviews.bson --mode upsert --upsertFields _id


echo "Data import completed." 



