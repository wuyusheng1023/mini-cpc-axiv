from sqlalchemy import Table, MetaData, Column, Integer, Float, String, Date
from sqlalchemy.orm import mapper

import model


metadata = MetaData()

mini_cpc = Table(
    'mini_cpc', metadata,
    Column('id', Integer, primary_key=True, autoincrement=True),
    Column('temp_sat', Float),
    Column('temp_con', Float),
    Column('temp_opt', Float),
    Column('flow', Float),
    Column('conc', Float),
)

def start_mock_mappers():
  mapper(model.MockMiniCpc, mini_cpc)
