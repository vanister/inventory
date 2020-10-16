# build the postgres image with the db create script in it
FROM postgres:13

# explicit
ENV POSTGRES_USER=postgres
ENV POSTGRES_PASSWORD=postgres123

# make the /scripts dir
RUN mkdir /scripts

# copy the db create and seed scripts to the image
COPY ./scripts /scripts
# copy the init script over to the image to create and seed the db.
# per the postgres image docs, files in the /docker-entrypoint-initdb.d dir
# will be run by the container when it starts
# COPY ./init-db.sh /docker-entrypoint-initdb.d/

EXPOSE 5432