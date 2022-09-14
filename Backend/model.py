from pydantic import BaseModel, EmailStr, Field


class Bag(BaseModel):
    bag_name: str
    bag_img_loc: str
    bag_price: float
    quantity: int


class UserSchema(BaseModel):
    fullname: str = Field(...)
    email: EmailStr = Field(...)
    password: str = Field(...)
    phone_num: str = Field(...)
    address: str = Field(...)
    
    class Config:
        schema_extra = {
            "example": {
                "fullname": "Adeola Ajala",
                "email": "ajalaadeola@example.com",
                "password": "weakpassword",
                "phone_num": "+493456298456",
                "address": "72 Bombay street"
            }
        }
    

class UserLoginSchema(BaseModel):
    email: EmailStr = Field(...)
    password: str = Field(...)

    class Config:
        schema_extra = {
            "example": {
                "email": "abdulazeez@x.com",
                "password": "weakpassword"
            }
        }