from datetime import datetime, date, time
from typing import List, Optional, Union, Set
from enum import Enum
from pydantic import BaseModel, field_validator


############################################
# Enumerations are defined here
############################################

############################################
# Classes are defined here
############################################
class BookCreate(BaseModel):
    pages: int
    time: time
    stock: int
    price: float
    release: date
    title: str
    authors: List[int]  # N:M Relationship
    library: List[int]  # N:M Relationship

    @field_validator('pages')
    @classmethod
    def validate_pages_1(cls, v):
        """OCL Constraint: constraint_Book_0_1"""
        if not (v > 10):
            raise ValueError('pages must be > 10')
        return v

class AuthorCreate(BaseModel):
    name: str
    books: List[int]  # N:M Relationship


class LibraryCreate(BaseModel):
    name: str
    books: List[int]  # N:M Relationship


