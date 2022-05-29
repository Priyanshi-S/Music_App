import pandas as pd
from pymongo import MongoClient

client = MongoClient()
#point the client at mongo URI
client = MongoClient('mongodb://localhost:27017/project')
#select database
db = client['project']
#select the collection within the database
test = db.history
#convert entire collection to Pandas dataframe
test = pd.DataFrame(list(test.find()))
print(test)