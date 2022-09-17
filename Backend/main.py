from urllib import response
from fastapi import Body, FastAPI, HTTPException, Depends
from fastapi.middleware.cors import CORSMiddleware

from model import Bag, UserSchema, UserLoginSchema
from auth.auth_handler import signJWT
from auth.auth_bearer import JWTBearer

#App object
app = FastAPI()

from bag_database import (
    fetch_one_bag,
    fetch_all_bags,
    delete_one_bag,
    update_bag,
    insert_one_bag
)
from user_database import(
    get_user,
    create_user,
    get_all_users,
    delete_user
)


origins = ['http://localhost:3000']


app.add_middleware(
    CORSMiddleware,
    allow_origins = origins,
    allow_credentials = True,
    allow_methods = ["*"],
    allow_headers = ("*")
)

async def check_user(data:UserLoginSchema):
    users = await get_all_users()
    # print(users)
    for user in users:
        if user.email == data.email and user.password == data.password:
            return True
    return False

@app.get("/bags")
async def get_bags():
    response = await fetch_all_bags()
    return response


@app.get("/bag{_id}", response_model=Bag)
async def get_bags_by_id(_id):
    response = await fetch_one_bag(_id)
    if response:
        return response
    raise HTTPException(404, "Bag not found")


@app.post("/bag", dependencies=[Depends(JWTBearer())], response_model=Bag)
async def post_bag(bag:Bag):
    response = await insert_one_bag(bag.dict())
    if response:
        return response
    raise HTTPException(404, "something went wrong")


@app.put("/bag{bag_name}", dependencies=[Depends(JWTBearer())], response_model=Bag)
async def update_bag_by_id(bag_name: str, bag_img_loc: str, bag_price: float, quantity: int):
    response = await update_bag(bag_name, bag_img_loc, bag_price, quantity)
    if response:
        return response
    raise HTTPException(404, f'Bag with name:{bag_name} does not exist')
    

@app.delete("/bags/{bag_name}", dependencies=[Depends(JWTBearer())])
async def delete_bag_by_id(bag_name):
    response = await delete_one_bag(bag_name)
    if response:
        return "Bag deleted from database"
    raise HTTPException(404, f'Bag with name:{bag_name} does not exist')

@app.get("/user/{user_email}", response_model=UserSchema)
async def get_one_user(user_email):
    response  = await get_user(user_email)
    if response:
        return response
    raise HTTPException(404, f"{user_email} does not exist")

@app.get("/all_users")
async def get_all_database_users():
    response = await get_all_users()
    return response

@app.post("/user/signup", tags=["user"])
async def create_new_user(user:UserSchema=Body(...)):
    user_check = await check_user(user)
    if user_check:
        # raise HTTPException(406, f"user with {user.email} already exist")
        return{'error': f'User with {user.email} already exist'}
    else:
        response = await create_user(user)
        if response:
            return signJWT(user.email)
        raise HTTPException(404, "User not created")

@app.post("/user/login", tags=["user"])
async def user_login(user: UserLoginSchema = Body(...)):
    response = await check_user(user)
    if response:
        return signJWT(user.email)
    return {
        "error": "Wrong login details!"
    }

@app.delete("/user{user_email}")
async def delete_user(user_email):
    response = await delete_user(user_email)
    if response:
        return "User deleted from database"
    raise HTTPException(404, f'User with email:{user_email} does not exist')
    