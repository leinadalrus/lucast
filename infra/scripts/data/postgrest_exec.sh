#!/usr/bin/bash

function run_postgrest() {
  sudo docker run --name tutorial -p 5433:5432 \ 
    -e POSTGRES_PASSWORD=$POSTGRES_APP_USER_PASSWORD \ 
    -d postgres
}

function new_postgrest() {
  sudo docker exec -it rootdata psql -U postgres
}

function export_postgrest() {
  db-uri = "postgres://authenticator:$POSTGRES_APP_USER_PASSWORD@localhost:5433/postgres"
  db-schemas = "api"
  db-anon-role = "web_anon"
}

function serve_postgrest() {
  ./postgrest rootdb.conf
}