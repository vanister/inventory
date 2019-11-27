#!/bin/bash

# create the inventory db
psql -U postgres -f /scripts/create-db.sql
# create the tables for the inventory db
psql -U postgres -d inventory -f /scripts/create-tables.sql
# seed it with some data
psql -U postgres -d inventory -f /scripts/seed-db.sql