from model import Bag

# MongoDB driver
import motor.motor_asyncio

client = motor.motor_asyncio.AsyncIOMotorClient('mongodb://localhost:27017')

database = client.BagList

collection = database.bag

async def fetch_one_bag(_id):
    document = await collection.find_one({"bag_name":_id})
    return document

async def fetch_all_bags():
    bags = []
    cursor = collection.find({})
    async for document in cursor:
        bags.append(Bag(**document))
    return bags

async def insert_one_bag(bag):
    await collection.insert_one(bag)
    return bag

async def update_bag(bag_name, bag_img_loc, bag_price, quantity):
    await collection.update_one({"bag_name":bag_name}, {"$set":{"bag_img_loc":bag_img_loc, "bag_price":bag_price, "quantity":quantity+3}}, upsert=True)
    document = await collection.find_one({"bag_name": bag_name})
    return document

async def delete_one_bag(bag_name:str):
    await collection.delete_one({"bag_name":bag_name})
    return "Successfully deleted"

    