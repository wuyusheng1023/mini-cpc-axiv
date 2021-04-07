from time import sleep

from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker

import config
import model
import orm


sleep(1)
engine = create_engine(config.get_postgres_uri())
orm.metadata.create_all(engine)

sleep(1)
get_session = sessionmaker(bind=engine)
session = get_session()
orm.start_mock_mappers()

while True:

  sleep(1)
  session = get_session()
  mini_cpc = model.MockMiniCpc()
  mini_cpc.update()
  session.add(mini_cpc)
  session.commit()
