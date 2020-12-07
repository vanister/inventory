# Inventory Database

## Setup

### Docker

The quickest way to get the database up and running is to run it in a docker container.

Make sure [Docker](https://www.docker.com/products/developer-tools) is installed on your machine and started then run the following command:

- Run `docker-compose up -d`
  - The `-d` runs it in detached mode so your terminal doesn't stay connected to the container.
- Run `docker ps` to confirm that the following containers are listed as started:
  - `inv_pgadmin` (container_name)
    - This is the database manager ui.
    - Open up shell into the container:
      - `docker exec -it inv_pgadmin /bin/sh`
      - if `/bin/sh` doesn't work, try `/bin/bash`
  - `inv_db`
    - This is the Postgres server.

Look in the `docker-compose.yml` file to see what he username and passwords are for pgadmin and the postgres.

You can also install the docker extensions from the project's recommended extensions list.

At the time of this writing they should be:

- Postgres Server (db)
  - user: `postgres`
  - pass: `postgres123`
- pgAdmin (management ui)
  - user: `admin@pgadmin.com`
  - pass: `pgadmin123`

Note that these are for local environment use only.

### Sqlite
