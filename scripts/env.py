#! /usr/bin/env python3

from pathlib import Path

FILE_DEV = ".env.dev"
FILE_PROD = ".env.prod"

TEMPLATE="""
DB_HOST=localhost
DB_PORT=3306
DB_USER=root
DB_PASSWORD=P@sswr0d
DB_NAME=examples
"""

def create_env_file(path: Path):
    if not path.exists():
        path.write_text(TEMPLATE)
    else:
        print(f"{path} already exists.")

if __name__ == "__main__":
    parent_path = Path(__file__).parent.parent
    file_dev_path = parent_path / FILE_DEV
    file_prod_path = parent_path / FILE_PROD

    try:
        create_env_file(file_dev_path)
        create_env_file(file_prod_path)
    except Exception as e:
        print(e)
