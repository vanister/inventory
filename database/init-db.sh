#!/bin/bash

# create the contact database
psql -U postgres -f /scripts/create-db.sql
# seed it with some data
psql -U postgres -f /scripts/seed-db.sql
