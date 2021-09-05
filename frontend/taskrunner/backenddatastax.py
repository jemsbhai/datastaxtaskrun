import os
import json
import random
import requests
import uuid





def getmaxusers():
    ASTRA_DB_ID = os.environ.get('ASTRA_DB_ID')
    ASTRA_DB_REGION = os.environ.get('ASTRA_DB_REGION')
    ASTRA_DB_KEYSPACE = os.environ.get('ASTRA_DB_KEYSPACE')
    ASTRA_DB_APPLICATION_TOKEN = os.environ.get('ASTRA_DB_APPLICATION_TOKEN')

    url = "https://" + ASTRA_DB_ID  + "-" + ASTRA_DB_REGION + ".apps.astra.datastax.com/api/rest/v2/keyspaces/" +ASTRA_DB_KEYSPACE +'/users2/rows'

    payload = ""

    querystring = {}

    headers = {
        "x-cassandra-token": ASTRA_DB_APPLICATION_TOKEN,
        'cache-control': "no-cache" }


    response = requests.request("GET", url, data=payload, headers=headers, params=querystring)


    js = response.json()


    return len(js['data'])


def login (email, pw):
    uid = "-1"

    ASTRA_DB_ID = os.environ.get('ASTRA_DB_ID')
    ASTRA_DB_REGION = os.environ.get('ASTRA_DB_REGION')
    ASTRA_DB_KEYSPACE = os.environ.get('ASTRA_DB_KEYSPACE')
    ASTRA_DB_APPLICATION_TOKEN = os.environ.get('ASTRA_DB_APPLICATION_TOKEN')

    url = "https://" + ASTRA_DB_ID  + "-" + ASTRA_DB_REGION + ".apps.astra.datastax.com/api/rest/v2/keyspaces/" +ASTRA_DB_KEYSPACE +'/users2/rows'

    payload = ""

    querystring = {}

    headers = {
        "x-cassandra-token": ASTRA_DB_APPLICATION_TOKEN,
        'cache-control': "no-cache" }


    response = requests.request("GET", url, data=payload, headers=headers, params=querystring)


    js = response.json()

    for d in js:
        if d['email'] == email and d['password'] == pw:
            return d['userid']

    return uid


def getuser (uid):
    uid = "-1"

    ASTRA_DB_ID = os.environ.get('ASTRA_DB_ID')
    ASTRA_DB_REGION = os.environ.get('ASTRA_DB_REGION')
    ASTRA_DB_KEYSPACE = os.environ.get('ASTRA_DB_KEYSPACE')
    ASTRA_DB_APPLICATION_TOKEN = os.environ.get('ASTRA_DB_APPLICATION_TOKEN')

    url = "https://" + ASTRA_DB_ID  + "-" + ASTRA_DB_REGION + ".apps.astra.datastax.com/api/rest/v2/keyspaces/" +ASTRA_DB_KEYSPACE +'/users2/rows'

    payload = ""

    querystring = {}

    headers = {
        "x-cassandra-token": ASTRA_DB_APPLICATION_TOKEN,
        'cache-control': "no-cache" }


    response = requests.request("GET", url, data=payload, headers=headers, params=querystring)


    js = response.json()

    for d in js:
        if d['userid'] == uid:
            return d['email'], d['username'], d['phone'], d['address']  

    return "none" , "none", "none", "none"



def getmaxtasks():

    ASTRA_DB_ID = os.environ.get('ASTRA_DB_ID')
    ASTRA_DB_REGION = os.environ.get('ASTRA_DB_REGION')
    ASTRA_DB_KEYSPACE = os.environ.get('ASTRA_DB_KEYSPACE')
    ASTRA_DB_APPLICATION_TOKEN = os.environ.get('ASTRA_DB_APPLICATION_TOKEN')

    url = "https://" + ASTRA_DB_ID  + "-" + ASTRA_DB_REGION + ".apps.astra.datastax.com/api/rest/v2/keyspaces/" +ASTRA_DB_KEYSPACE +'/tasks/rows'

    payload = ""

    querystring = {}

    headers = {
        "x-cassandra-token": ASTRA_DB_APPLICATION_TOKEN,
        'cache-control': "no-cache" }


    response = requests.request("GET", url, data=payload, headers=headers, params=querystring)


    js = response.json()


    return len(js['data'])


def addtask(items, typex, userid, helperid, pickup, dropoff, budget, status, preference, shops):

    ASTRA_DB_ID = os.environ.get('ASTRA_DB_ID')
    ASTRA_DB_REGION = os.environ.get('ASTRA_DB_REGION')
    ASTRA_DB_KEYSPACE = os.environ.get('ASTRA_DB_KEYSPACE')
    ASTRA_DB_APPLICATION_TOKEN = os.environ.get('ASTRA_DB_APPLICATION_TOKEN')

    taskid = str(getmaxtasks() + 1)


    url = "https://" + ASTRA_DB_ID  + "-" + ASTRA_DB_REGION + ".apps.astra.datastax.com/api/rest/v2/keyspaces/" +ASTRA_DB_KEYSPACE +"/tasks"

    idx = str(uuid.uuid4())
    payload = {"id":idx,"taskid": taskid,"items":items, "type":typex, "userid":userid, "helperid":helperid, "dropoff":dropoff, "pickup":pickup, "budget":budget, "status":status, "preference":preference, "shops":shops}

    payload = json.dumps(payload)

    headers = {
    'Content-Type': "application/json",
    "x-cassandra-token": ASTRA_DB_APPLICATION_TOKEN,
    'cache-control': "no-cache" }

    response = requests.request("POST", url, data=payload, headers=headers)

    return str(taskid), response.text


def getmaxplaces():

    ASTRA_DB_ID = os.environ.get('ASTRA_DB_ID')
    ASTRA_DB_REGION = os.environ.get('ASTRA_DB_REGION')
    ASTRA_DB_KEYSPACE = os.environ.get('ASTRA_DB_KEYSPACE')
    ASTRA_DB_APPLICATION_TOKEN = os.environ.get('ASTRA_DB_APPLICATION_TOKEN')

    url = "https://" + ASTRA_DB_ID  + "-" + ASTRA_DB_REGION + ".apps.astra.datastax.com/api/rest/v2/keyspaces/" +ASTRA_DB_KEYSPACE +'/places/rows'

    payload = ""
    querystring = {}

    headers = {
        "x-cassandra-token": ASTRA_DB_APPLICATION_TOKEN,
        'cache-control': "no-cache" }


    response = requests.request("GET", url, data=payload, headers=headers, params=querystring)


    js = response.json()


    return len(js['data'])



def register(username, email, typex, address, phone, password):

    ASTRA_DB_ID = os.environ.get('ASTRA_DB_ID')
    ASTRA_DB_REGION = os.environ.get('ASTRA_DB_REGION')
    ASTRA_DB_KEYSPACE = os.environ.get('ASTRA_DB_KEYSPACE')
    ASTRA_DB_APPLICATION_TOKEN = os.environ.get('ASTRA_DB_APPLICATION_TOKEN')

    userid = str(getmaxusers() + 1)


    url = "https://" + ASTRA_DB_ID  + "-" + ASTRA_DB_REGION + ".apps.astra.datastax.com/api/rest/v2/keyspaces/" +ASTRA_DB_KEYSPACE +"/users2"

    idx = str(uuid.uuid4())
    payload = {"id":idx,"userid": userid,"username":username,"email":email, "type":typex, "address":address, "phone":phone, "password":password}
    payload = json.dumps(payload)

    headers = {
    'Content-Type': "application/json",
    "x-cassandra-token": ASTRA_DB_APPLICATION_TOKEN,
    'cache-control': "no-cache" }

    response = requests.request("POST", url, data=payload, headers=headers)

    return str(userid), response.text






def dummy(request):
    """Responds to any HTTP request.
    Args:
        request (flask.Request): HTTP request object.
    Returns:
        The response text or any set of values that can be turned into a
        Response object using
        `make_response <http://flask.pocoo.org/docs/1.0/api/#flask.Flask.make_response>`.
    """
    if request.method == 'OPTIONS':
        # Allows GET requests from origin https://mydomain.com with
        # Authorization header
        headers = {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'POST',
            'Access-Control-Allow-Headers': '*',
            'Access-Control-Max-Age': '3600',
            'Access-Control-Allow-Credentials': 'true'
        }
        return ('', 204, headers)

    # Set CORS headers for main requests
    headers = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': 'true'
    }

    request_json = request.get_json()
    # conn = connector()
    # initialize(conn)

    retjson = {}

    action = request_json['action']
    if action == "register" :
        uname = request_json['name']
        pw = request_json['password']
        utype = request_json['type']
        uaddress = request_json['address']
        phone = request_json['phone']
        uemail = request_json['email']


        rets, uid = register(uname, uemail, utype, uaddress, phone, pw)

        retjson['status'] = "successfully added"
        retjson['response'] = rets
        retjson['userid'] = uid
        

        return json.dumps(retjson)


    if action == "login":
        email = request_json['email']
        pw = request_json['password']

        uid = login(email, pw)

        retjson['status'] = "request processed"
        # retjson['response'] = rets
        retjson['userid'] = uid
        

        return json.dumps(retjson)



    if action == "profile":
        uid = request_json['userid']

        email, name, phone, address = getuser(uid)

        retjson['status'] = "request processed"
        # retjson['response'] = rets
        retjson['name'] = name
        retjson['email'] = email
        retjson['phone'] = phone
        retjson['address'] = address
        
        return json.dumps(retjson)


    if action == "addtask" :

        items = request_json['items']
        typex = request_json['type']
        userid = request_json['userid']
        pickup = request_json['pickup']
        dropoff = request_json['dropoff']
        budget = request_json['budget']
        preference = request_json['preference']
        shops = request_json['shops']

        rets, tid = addtask(items, typex, userid, "-1", pickup, dropoff, budget, "0", preference, shops)
        

        retjson['status'] = "successfully added"
        retjson['response'] = rets
        retjson['taskid'] = tid
        

        return json.dumps(retjson)






    retstr = "action not done"

    if request.args and 'message' in request.args:
        return request.args.get('message')
    elif request_json and 'message' in request_json:
        return request_json['message']
    else:
        return retstr
