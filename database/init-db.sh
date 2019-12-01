#!/bin/bash

SCRIPT_DIR="/scripts"
UN="postgres"
DB="inventory"

# create the inventory db
psql -U $UN -f $SCRIPT_DIR/create-db.sql
# create the tables for the inventory db
psql -U $UN -d $DB -f $SCRIPT_DIR/create-tables.sql
# seed it with some data
psql -U $UN -d $DB -f $SCRIPT_DIR/seed-db.sql