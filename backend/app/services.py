from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker

import config


engine = create_engine(config.get_postgres_uri())
get_session = sessionmaker(bind=engine)
columns = ['id', 'created', 'temp_sat', 'temp_con', 'temp_opt', 'flow', 'conc']

def get_sql_data():

  session = get_session()
  result = list(session.execute('SELECT * FROM "mini_cpc" ORDER BY id DESC LIMIT 1'))

  data = {columns[i]: result[0][i] for i in range(len(columns))}

  return data
