#!/bin/bash

SCRIPT_DIR="/scripts"
UN="postgres"
DB="inventory"

# create the inventory db
psql -U $UN -f $SCRIPT_DIR/create-db.sql