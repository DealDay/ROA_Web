from model import UserSchema

# MongoDB driver
import motor.motor_asyncio

client = motor.motor_asyncio.AsyncIOMotorClient('mongodb://localhost:27017')

database = client.roa

collection = database.users

async def get_user(user_email):
    document = await collection.find_one({"email":user_email})
    return document

async def get_all_users():
    users = []
    cursor = collection.find({})
    async for document in cursor:
        users.append(UserSchema(**document))
    # print('in')
    return users

async def create_user(user):
    await collection.insert_one(user.dict())
    return user


async def delete_user(user_id:str):
    await collection.delete_one({"user_id":user_id})
    return "Successfully deleted"

    