import requests 
import json
import uuid
# from astrapy.collections import create_client, AstraCollection
from astrapy.rest import create_client, AstraClient, http_methods

ASTRA_DB_ID="8adecd2b-8a24-499c-89b3-eb9201fa64d5"
ASTRA_DB_REGION="us-east1"
ASTRA_DB_APPLICATION_TOKEN="GET YOUR OWN TOKEN THANKS"
ASTRA_DB_KEYSPACE="zer0keyspace"

import requests


def astra_rest_client():
    return create_client(astra_database_id=ASTRA_DB_ID,
                         astra_database_region=ASTRA_DB_REGION,
                         astra_application_token=ASTRA_DB_APPLICATION_TOKEN)



def test_collection(colname):
    astra_client = create_client(astra_database_id=ASTRA_DB_ID,
                                 astra_database_region=ASTRA_DB_REGION,
                                 astra_application_token=ASTRA_DB_APPLICATION_TOKEN)

    return astra_client.namespace(ASTRA_DB_KEYSPACE).collection(colname)

# url = "https://" + ASTRA_DB_ID  + "-" + ASTRA_DB_REGION + ".apps.astra.datastax.com/api/rest/v2/schemas/keyspaces/" +ASTRA_DB_KEYSPACE +"/tables"


# payload = '{"name":"rest_example_products","ifNotExists":true,"columnDefinitions": [ {"name":"id","typeDefinition":"uuid","static":false}, {"name":"productname","typeDefinition":"text","static":false}, {"name":"description","typeDefinition":"text","static":false}, {"name":"price","typeDefinition":"decimal","static":false}, {"name":"created","typeDefinition":"timestamp","static":false}],"primaryKey": {"partitionKey":["id"]},"tableOptions":{"defaultTimeToLive":0}}'

# headers = {
#     'Content-Type': "application/json",
#     "x-cassandra-token": ASTRA_DB_APPLICATION_TOKEN,
#     'cache-control': "no-cache" }


# response = requests.request("POST", url, data=payload, headers=headers)

# print(response.text)

# print (response.json())


url = "https://" + ASTRA_DB_ID  + "-" + ASTRA_DB_REGION + ".apps.astra.datastax.com/api/rest/v2/schemas/keyspaces/" +ASTRA_DB_KEYSPACE +"/tables"


# payload = '{"name":"users2","ifNotExists":true,"columnDefinitions": [ {"name":"id","typeDefinition":"uuid","static":false}, {"name":"userid","typeDefinition":"text","static":false}, {"name":"username","typeDefinition":"text","static":false}, {"name":"email","typeDefinition":"text","static":false}, {"name":"password","typeDefinition":"text","static":false}, {"name":"address","typeDefinition":"text","static":false}, {"name":"phone","typeDefinition":"text","static":false}, {"name":"type","typeDefinition":"text","static":false}],"primaryKey": {"partitionKey":["id"]},"tableOptions":{"defaultTimeToLive":0}}'

# payload = '{"name":"places","ifNotExists":true,"columnDefinitions": [ {"name":"id","typeDefinition":"uuid","static":false}, {"name":"placeid","typeDefinition":"text","static":false}, {"name":"placename","typeDefinition":"text","static":false}, {"name":"address","typeDefinition":"text","static":false}, {"name":"type","typeDefinition":"text","static":false}],"primaryKey": {"partitionKey":["id"]},"tableOptions":{"defaultTimeToLive":0}}'

# payload = '{"name":"tasks","ifNotExists":true,"columnDefinitions": [ {"name":"id","typeDefinition":"uuid","static":false}, {"name":"taskid","typeDefinition":"text","static":false}, {"name":"items","typeDefinition":"text","static":false}, {"name":"shops","typeDefinition":"text","static":false}, {"name":"userid","typeDefinition":"text","static":false}, {"name":"helperid","typeDefinition":"text","static":false}, {"name":"dropoff","typeDefinition":"text","static":false}, {"name":"pickup","typeDefinition":"text","static":false}, {"name":"budget","typeDefinition":"text","static":false}, {"name":"status","typeDefinition":"text","static":false}, {"name":"preference","typeDefinition":"text","static":false}, {"name":"type","typeDefinition":"text","static":false}],"primaryKey": {"partitionKey":["id"]},"tableOptions":{"defaultTimeToLive":0}}'

# payload = '{"name":"ratings","ifNotExists":true,"columnDefinitions": [ {"name":"id","typeDefinition":"uuid","static":false}, {"name":"helperid","typeDefinition":"text","static":false}, {"name":"rating","typeDefinition":"text","static":false}, {"name":"numratings","typeDefinition":"text","static":false}],"primaryKey": {"partitionKey":["id"]},"tableOptions":{"defaultTimeToLive":0}}'


##add test data


# url = "https://" + ASTRA_DB_ID  + "-" + ASTRA_DB_REGION + ".apps.astra.datastax.com/api/rest/v2/keyspaces/" +ASTRA_DB_KEYSPACE +"/users2"

# url = "https://" + ASTRA_DB_ID  + "-" + ASTRA_DB_REGION + ".apps.astra.datastax.com/api/rest/v2/keyspaces/" +ASTRA_DB_KEYSPACE +"/places"

# url = "https://" + ASTRA_DB_ID  + "-" + ASTRA_DB_REGION + ".apps.astra.datastax.com/api/rest/v2/keyspaces/" +ASTRA_DB_KEYSPACE +"/tasks"

url = "https://" + ASTRA_DB_ID  + "-" + ASTRA_DB_REGION + ".apps.astra.datastax.com/api/rest/v2/keyspaces/" +ASTRA_DB_KEYSPACE +"/ratings"


# '{"id":"e9b6c02d-0604-4bab-a3ea-6a7984654631","productname":"Heavy Lift Arms","description":"Heavy lift arms capable of lifting 1,250 lbs of weight per arm. Sold as a set.","price":"4199.99","created":"2019-01-10T09:48:31.020Z"}'

# username = "donnie darko"
# email = "donnie@darko.com"
# typex = "1"
# address = "100 test drive, test city, test state, 32901"
# phone = "1234567899"
# password = "password"

# userid = "0"
# idx = str(uuid.uuid4())


# payload = {"id":idx,"userid": userid,"username":username,"email":email, "type":typex, "address":address, "phone":phone, "password":password}
# payload = json.dumps(payload)


# username = "clark kent"
# email = "kal@el.com"
# typex = "0"
# address = "100 test drive, smallville, test state, 32901"
# phone = "9876543211"
# password = "password"

# userid = "1"
# idx = str(uuid.uuid4())


# payload = {"id":idx,"userid": userid,"username":username,"email":email, "type":typex, "address":address, "phone":phone, "password":password}
# payload = json.dumps(payload)



# username = "never gonna"
# email = "give@you.up"
# typex = "0"
# address = "never gonna let you down, never gonna turn around, and desert you, 32901"
# phone = "9876543211"
# password = "password"

# userid = "2"
# idx = str(uuid.uuid4())


# payload = {"id":idx,"userid": userid,"username":username,"email":email, "type":typex, "address":address, "phone":phone, "password":password}
# payload = json.dumps(payload)


# placename = "walmart"
# typex = "0"
# address = "never gonna let you down, never gonna turn around, and desert you, 32901"
# phone = "9876543211"

# placeid = "0"
# idx = str(uuid.uuid4())


# payload = {"id":idx,"placeid": placeid,"placename":placename, "type":typex, "address":address}
# payload = json.dumps(payload)


# items = "['item1', 'item2', 'item3']"
# shops = "['shop1', 'shop2', 'shop3']"
# userid = "0"
# helperid = "-1"  ##-1 means unassigned
# dropoff = ""
# pickup = ""
# budget = "150"
# status = "0"  ##0 = posted, 1 = picked up, 2 =  completed
# preference = "0"
# typex = "0" 


# taskid = "0"
# idx = str(uuid.uuid4())


# items = "['panadol', 'aspirin', 'ibuprofen']"
# shops = ""
# userid = "0"
# helperid = "-1"  ##-1 means unassigned
# dropoff = ""
# pickup = ""
# budget = "60"
# status = "0"  ##0 = posted, 1 = picked up, 2 =  completed
# preference = "0"
# typex = "1" 


# taskid = "1"
# idx = str(uuid.uuid4())


# items = ""
# shops = ""
# userid = "0"
# helperid = "-1"  ##-1 means unassigned
# dropoff = "{'lat' : 100, 'lon': '84'}"
# pickup = "{'lat' : 101, 'lon': '83'}"
# budget = "40"
# status = "0"  ##0 = posted, 1 = picked up, 2 =  completed
# preference = "0"
# typex = "2" 


# taskid = "2"
# idx = str(uuid.uuid4())

# payload = {"id":idx,"taskid": taskid,"items":items, "type":typex, "userid":userid, "helperid":helperid, "dropoff":dropoff, "pickup":pickup, "budget":budget, "status":status, "preference":preference, "shops":shops}
# payload = json.dumps(payload)



# rating = "4.0"
# numratings = "1"

# helperid = "2"
# idx = str(uuid.uuid4())

# payload = {"id":idx,"helperid": helperid,"rating":rating, "numratings":numratings}
# payload = json.dumps(payload)




# users (id INT PRIMARY KEY, username STRING, email STRING, userpassword STRING, useraddress STRING, lat STRING, lon STRING, usertype STRING)
# places (id INT PRIMARY KEY, name STRING, placeaddress STRING, lat STRING, lon STRING, type STRING, img STRING)
# tasks (id INT PRIMARY KEY, name STRING, userid STRING, cost STRING, price STRING, placeid STRING, items STRING, helperid STRING, status STRING)

# headers = {
#     'Content-Type': "application/json",
#     "x-cassandra-token": ASTRA_DB_APPLICATION_TOKEN,
#     'cache-control': "no-cache" }


# response = requests.request("POST", url, data=payload, headers=headers)

# print(response.text)

# print (response.json())


##test data retrieval

url = "https://" + ASTRA_DB_ID  + "-" + ASTRA_DB_REGION + ".apps.astra.datastax.com/api/rest/v2/keyspaces/" +ASTRA_DB_KEYSPACE +'/ratings/rows'

# # users?where=\{"firstname":\{"$eq":"Mookie"\}\}

payload = ""

# querystring = {"where":'{"hack":{"$eq":""}}', "ALLOW FILTERING" : ""}
querystring = {}

headers = {
    "x-cassandra-token": ASTRA_DB_APPLICATION_TOKEN,
    'cache-control': "no-cache" }


response = requests.request("GET", url, data=payload, headers=headers, params=querystring)

# print(response.text)

# print (response.json())

js = response.json()

print(js['data'])

print (len(js['data']))

##test data update

# url = "https://" + ASTRA_DB_ID  + "-" + ASTRA_DB_REGION + ".apps.astra.datastax.com/api/rest/v2/keyspaces/" +ASTRA_DB_KEYSPACE +'/users2/rows'


# payload =  {"columns":[{"name":"id","value":"636c9e89-aecd-454e-8147-43315570b40d"},{"name":"hack","value":"testin"},{"name":"address","value":"100 farm drive, smallville, test state, 32901"}, {"name":"email","value":"kal@el.com"}, {"name":"password","value":"password"}, {"name":"phone","value":"9998887771"}, {"name":"username","value":"clark kent"}, {"name":"type","value":"0"}, {"name":"userid","value":"1"}]}

# headers = {
#     'content-type': "application/json",
#     "x-cassandra-token": ASTRA_DB_APPLICATION_TOKEN,
#     'cache-control': "no-cache"
#     }

# response = requests.request("PUT", url, data=payload, headers=headers)

# print (response.text)



##unsued

# acol = test_collection("tasks")



# documents = acol.find(query={
#         "rating": {"$eq": f"5.0"},
#     })

# for d in documents:
#     print (d)


# ahc = create_client()
# ax = ahc.request(
#     method=http_methods.GET,
#     path=f"/api/rest/v2/namespaces/{ASTRA_DB_KEYSPACE}/ratings",
#     json_data={
#     })

# print (ax)
