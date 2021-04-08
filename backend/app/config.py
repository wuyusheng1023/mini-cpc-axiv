import os


def get_postgres_uri():
    user = os.environ.get('DB_USER')
    password = os.environ.get('DB_PASSWORD')
    host = os.environ.get('DB_HOST')
    port = 5432
    db_name = 'postgres'
    return f"postgresql://{user}:{password}@{host}:{port}/{db_name}"
